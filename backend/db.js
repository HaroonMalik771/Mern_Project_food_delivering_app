const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/mydb';

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connection successful');
});


db.on('error', () => {
    console.log('MongoDB connection failed');
});

module.exports = mongoose;
