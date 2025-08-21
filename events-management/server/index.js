import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';


const app = express();
const PORT = 8090;

//Middleware
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);


// Error handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send(500).send('Something broke' + err)
});


db.sequelize.sync().then(() => {
    console.log("database conected successfully");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
});


