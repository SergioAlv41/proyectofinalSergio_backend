const searchServices = require('../services/serviceProducts');

//Filtramos los productos
const getFilteredProducts = async (req, res) => {
    let { name, relevance, price, brand, page = 1, limit = 10, sortprice = 1 } = req.query;
    if (relevance) relevance = relevance.trim().toLowerCase();
    if (price) price = price.trim();
    if (isNaN(page) || page < 1) page = 1;
    if (isNaN(limit) || limit < 1) limit = 10;
    if (sortprice !== '-1') sortprice = 1;

    const filter = {};
    if (name) filter.name = { $regex: `.*${name}.*` };
    if (relevance) filter.relevance = { $lte: relevance };
    if (price) filter.price = { $lte: price };
    if (brand) filter["manufacturer.name"] = { $regex: `.*${brand}.*` };
    console.log(brand);

    const sort = { price: sortprice };
    const populate = { path: 'manufacturer._id.ref', select: '-_id cif address' };
    const options = { sort, populate, page, limit };

    result = await searchServices.getFilteredProducts(filter, options);
    response_code = (result.docs.length) ? 0 : 1;

    res.json({ response_code, result });
};

module.exports = getFilteredProducts;