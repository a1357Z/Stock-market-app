const mongoose = require('mongoose')
 
const stockSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    symbol:{
        type : String,
        required: true
    },
    price:{
        type : String,
        required: true
    },
    marketCap:{
        type : String,
        required: true
    }
})

const stock = mongoose.model('stock',stockSchema)

module.exports = stock