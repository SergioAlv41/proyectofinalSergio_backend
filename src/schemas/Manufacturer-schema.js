const { model, Schema } = require('mongoose');

const manufacturerSchema = new Schema({
    name: String,
    cif: String,
    address: String
});

const Manufacturer = model('manufacturer', manufacturerSchema);

module.exports = Manufacturer;