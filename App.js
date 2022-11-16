require('./connection');
const cors = require('cors');
const express = require('express');
const app = express();

const routerManufacturers = require('./src/routes/manufacturerRoutes');
const routerProducts = require('./src/routes/productRoutes');

const config = require('./modules/config');
const hostname = config.HOST;
const port = config.PORT;

app.use(cors());
app.use(express.json());
app.use('/manufacturers', routerManufacturers);
app.use('/products', routerProducts);

app.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en http://${hostname}:${port}/`);
    console.log(`Entorno: ${process.env.NODE_ENV}`);
});