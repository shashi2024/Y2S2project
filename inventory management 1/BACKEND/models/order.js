const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    sname : {
        type : String,
        required: true
    },
    oid : {
        type : Number,
        required: true
    },
    oitem : {
        type : String,
        required: true
    },
    qty : {
        type : Number,
        required: true
    }

})

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;