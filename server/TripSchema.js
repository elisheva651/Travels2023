const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const TripSchema = new mongoose.Schema({
    "title":{
        type:String,  
        required:true
    },

    "region/district":{
        type:String
    },
    
    "start country": {
        type:String,
        required:true
    }, 
    "number of days":{
        type:String, 
        required:true
    }, 
    "imgs":{
        type:Array(String)
    }

});



module.exports=mongoose.model("Trip", TripSchema) 