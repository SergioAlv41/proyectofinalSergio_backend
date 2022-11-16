const mongoose = require('mongoose');
const url = 'mongodb+srv://SergioAlvarino:dirkdallas41@proyectofinalsergio.nmdz5gc.mongodb.net/test';
const Product = require('./src/schemas/Product-schema.js');
const Manufacturer = require('./src/schemas/Manufacturer-schema.js');
const products = require('./data/products.js');
const manufacturers = require('./data/manufacturers.js');

const createdb = async (request, response) => {
    const db = await mongoose.connect(url);
    await Product.deleteMany({});
    await Manufacturer.deleteMany({});
    const newManufacturers = await Manufacturer.insertMany(manufacturers);
    const newProducts = products.map(product => {
        const manufacturer = newManufacturers.filter((manufacturer) => manufacturer.cif === product.manufacturer)[0];
        const { _id, name } = manufacturer;
        return {
            ...product,
            manufacturer: { _id, name }
        }
    });
    await Product.insertMany(newProducts);
    mongoose.connection.close();
};

createdb();