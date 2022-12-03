const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name     : String,
    marca    : String,
    preco    : Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model