const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDb = require('./config/db');

//load environment variables
dotenv.config({ path : './config/config.env' });

//connect database
connectDb();

// route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

 //mount routers

 app.use('/api/bootcamps', bootcamps);


const PORT = process.env.PORT || 5000 ;

app
.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//Handling unhaldles exceptions

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error : ${err.message}`.red.bold);
    //close server and exit process

    server.close(() => process.exit(1));
})