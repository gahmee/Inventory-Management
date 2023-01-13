const mongoose = require('mongoose')

let productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    SKU: { type: String, required: true },
    category: { type: String, required: true },
    condition: { type: String, required: true },
    previousQuantity: { type: Number, required: false },
    received: { type: Number, required: false },
    quantity: { type: Number, required: true },
    newQuantity: { type: Number, required: true },
    gainLoss: { type: Number, required: false },
})
const Product = mongoose.model('Product', productSchema)
module.exports = Product

