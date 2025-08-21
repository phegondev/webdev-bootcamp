
import bcrypt from 'bcryptjs';

// Define and export the User model.
// The function takes the Sequelize instance and DataTypes as arguments.
//the sequelize is used to create an orm. i.e generate an sql qwery that will be used for persit data into the database

export default (sequelize, DataTypes) => {

    const User = sequelize.define('User', {
        // Define the 'id' field. It's the primary key and automatically increments.
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Define the 'username' field. It's a string, can't be null
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // Define the 'email' field. It's a string, can't be null, must be unique,
        // and has a validator to ensure it's in a valid email format.
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        // Define a Sequelize hook to run before a user is saved to the database.
        //ensure password is hashed before being stored to the database
        hooks: {
            beforeSave: async (user) => {
                // Check if the password field has been changed.
                // This prevents re-hashing an already hashed password on updates.
                if (user.changed('password')) {
                    // Generate a salt with a cost factor of 10.
                    // A salt is a random string added to the password before hashing to enhance security.

                    const salt = await bcrypt.genSalt(10);
                    // Hash the user's plain-text password using the generated salt.

                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        }
    });

    // Add a custom instance method to the User model.
    // This method can be called on a User object to compare a password.
    User.prototype.comparePassword = async function (candidatePassword) {
        // Use bcrypt.compare to securely compare the provided password with the hashed password
        // stored in the database. It returns a boolean (true if they match, false otherwise).
        return await bcrypt.compare(candidatePassword, this.password);
    };

    // Return the defined User model.
    return User;
}
