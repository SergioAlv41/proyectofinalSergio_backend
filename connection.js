const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://SergioAlvarino:dirkdallas41@proyectofinalsergio.nmdz5gc.mongodb.net/test';

mongoose.connect(connectionString)
    .then(() => {
        console.log('Database connected')
    }).catch(err => {
        console.error(err)
    })
//mongoose.connection.close()
module.exports = mongoose;