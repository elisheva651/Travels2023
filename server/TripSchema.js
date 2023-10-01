const mongoose=require("mongoose")
const Schema = mongoose.Schema;


const userSchema= new mongoose.Schema({
    id: {
        type:String,
        required:true
    }
    // title: "Israel",
    // tripTitle: "Mitzpe Ramon",
    // content: "In Israel we recomend you to travel in Mitzpe Ramon.",
    // URL: "https://en.wikipedia.org/wiki/Mitzpe_Ramon",
    // image:
});



module.exports=mongoose.model("Trip", userSchema) 