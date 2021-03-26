const mongoose = require('mongoose');
const schema = mongoose.Schema;

let productSchema = new schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    price: {
        type: Number,
        required: true
    }
});


// model shuld start with capital letter
module.exports = mongoose.model('Product', productSchema);