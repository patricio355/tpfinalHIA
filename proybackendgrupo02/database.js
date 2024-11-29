const mongoose = require('mongoose');

const URI = "mongodb://mongo:27017/proyfinalgrupo02";
mongoose.connect(URI) 
    .then(db => console.log('Base de Datos conectada'))
    .catch(err => console.error(err))
module.exports = mongoose;


