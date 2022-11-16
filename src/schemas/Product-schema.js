const { model, Schema } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const productSchema = new Schema(
    {
        name: String,
        manufacturer: {
            _id: { type: Schema.Types.ObjectId, ref: 'manufacturer' },
            name: String
        },
        relevance: Number,
        price: Number
    },
);

productSchema.plugin(mongoosePaginate);


const Product = model('Product', productSchema);

module.exports = Product;