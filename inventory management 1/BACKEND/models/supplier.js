const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    item : {
        type : String,
        required: true
    },
    snumber : {
        type : Number,
        required: true
    },
    cname : {
        type : String,
        required: true
    }

})

const Supplier = mongoose.model("Supplier",supplierSchema);
module.exports = Supplier;