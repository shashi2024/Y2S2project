const mongoose = require('mongoose');

const CampShema = new mongoose.Schema({
    campName:{
        type:String,
    },
    budget:{
        type:String,
    },
    startDate:{
        type:String,
    },
    endDate:{
        type:String,
    },
    platform:{
        type:String,
    },
    description:{
        type:String,
    },
    tasks:{
        type:String,
    },
    status:{
        type:String
    },

});

module.exports = Campaign = mongoose.model("camp",CampShema);
