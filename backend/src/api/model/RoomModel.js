const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomno:{
        type:String,
        required:true,
    },
    floor:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    },
    noofbeds:{
        type:Number,
        required:true,
    },
    balcony:{
        type:String,
        required:true,
    },
    ac:{
        type:String,
        required:true,
    },
    
    
});

module.exports = mongoose.model(
    'RoomModel',//file name
     roomSchema //function name
    );
