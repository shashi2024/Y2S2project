const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    reservationid:{
        type:String,
        required:true,
    },
    passportid:{
        type:String,
        required:true,
    },
    noofdays:{
        type:Number,
        required:true,
    },
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
    request:{
        type:String,
        required:true,
    },
    arrival:{
        type:String,
        required:true,
    },
    leave:{
        type:String,
        required:true,
    },
    
    
});

module.exports = mongoose.model(
    'ReservationModel',//file name
     reservationSchema //function name
    );
