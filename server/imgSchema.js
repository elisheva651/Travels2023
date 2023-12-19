const mongoose = require("mongoose");

const imgSchema = new mongoose.Schema({
    name:String
})

module.exports=mongoose.model("imgSchema", imgSchema) 