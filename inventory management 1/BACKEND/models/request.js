const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    onumber : {
        type : Number,
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
    message : {
        type : String,
        required: true
    }

})

const Request = mongoose.model("Request",requestSchema);
module.exports = Request;