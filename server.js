const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const logger = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

// Define Middleware Here -------------------------------------
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger('dev'));

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Define API Routes Here -------------------------------------
app.use(routes);

// Establishing Connection to MongoDB Database
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/mernplayground';
// mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`)
});