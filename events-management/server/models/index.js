


//This file  main job is to establish the connection to the database, 
// import all the data models, and define the relationships between them.



import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import userModel from './user.js';
import eventModel from './event.js';
import attendeeModel from './attendee.js';


// Create a new Sequelize instance to connect to the database.
// This instance is the core of our database interactions.
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        logging: config.logging
    }
);



// Create an empty object to hold our database models and the Sequelize instance.
const db = {};

// Store the Sequelize library and the database connection instance in our db object.
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// Initialize models
// Initialize each model by passing the sequelize connection object.
// This step links our model definitions to the actual database.
db.User = userModel(sequelize, Sequelize);
db.Event = eventModel(sequelize, Sequelize);
db.Attendee = attendeeModel(sequelize, Sequelize);

// Define relationships
// Define the relationships between the models.
// These associations are crucial for creating a relational structure in the database.

// A User can have many Events (one-to-many relationship).
// The 'as' alias ('events') helps with querying, and 'foreignKey' defines the link.
db.User.hasMany(db.Event, { as: 'events', foreignKey: 'userId' });
db.User.hasMany(db.Attendee, { as: 'rsvps', foreignKey: 'userId' });

db.Event.hasMany(db.Attendee, { as: 'attendees', foreignKey: 'eventId' });
db.Event.belongsTo(db.User, { as: 'creator', foreignKey: 'userId' });

db.Attendee.belongsTo(db.User, { as: 'user', foreignKey: 'userId' });
db.Attendee.belongsTo(db.Event, { as: 'event', foreignKey: 'eventId' });


// Export the 'db' object so it can be used throughout the application to
// access models and interact with the database.
export default db;