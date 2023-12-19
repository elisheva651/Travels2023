const mongoose=require('mongoose')
const cors = require('cors')
const Trip=require("./TripSchema")
const bodyParser = require('body-parser');
const axios = require('axios');

const express = require('express')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port = 5000
const multer = require('multer');
const TripSchema = require('./TripSchema');
const { Axios } = require('axios');
const upload =multer({});

const uri = 'mongodb+srv://trips_db:tripsdb@travels.4gvojse.mongodb.net/?retryWrites=true&w=majority&tls=true';
mongoose.connect(uri).then((x)=>{console.log("connected")}).catch(error=>{console.log("catch", error)})

// Access-Control-Allow-Origin: https://en.wikipedia.org/w



// region consts
const wik1 = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=" 
const wik2 = "&format=json"
const wiki1 = "https://en.wikipedia.org/w/api.php?origin=*&action=parse&prop=text&page="
const wiki2 ="&section=4&format=json&formatversion=2&callback=?"
const weather_api_key = "04f7642090575e9b9e62e2f1252f28aa"
const weather_url_1 = "https://api.openweathermap.org/data/2.5/weather?q="
const weather_url_2 = `&units=Metric&appid=${weather_api_key}`



app.use(cors({
    origin: '*'
}));


// app.get('/countries', (req, res) => {
//     const ids = countries.map((country) => (
//         country.id
//       ))

//     res.send(ids)
//         // console.log(res.status)
// })

// app.get('/country/:countryId', (req, res) => {
//     const countryId = req.params.countryId;
//     const country = countries.find(_country => _country.id === countryId);
//     console.log("erver")

//     if(!country){

//         console.log("erver")

//         res.status(400).send(JSON.stringify({message: 'id is not supported'}))
//         return;
//     }
//     console.log(country, " country in server")
//     res.send(JSON.stringify(country))

// })



app.get('/allPosts',async (req, res) => {
  try{
    const result = await Trip.find()
    res.status(200).send(JSON.stringify(result))
    return 
  }catch(error){
    console.log(error, " error in allPost fetch")

  }
})

app.get('/search',async (req, res) => {
  console.log(req.query["data"], "req.query[data]")
  try{
    console.log("searching fetch")
    const result = await Trip.find(JSON.parse(req.query["data"]), {_id:0, __v:0})
    console.log(result)
    res.status(200).send(JSON.stringify(result))
    return 
  }catch(error){
    console.log("error in search", error)
    res.status(500)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



app.delete('/api/deleteTrip', async (req, res) => {
  try{

    const result = await Trip.deleteOne({_id:req.body._id})
    console.log("delete complete")
  }catch(error){
    console.log("error to fetch deleteTrip", error)
  }

})


app.post('/api/editPost', async (req, res) => {
  try{
    const result = await Trip.findOneAndUpdate({_id:req.body.postId}, req.body.dataTrip)
    const res2 = await Trip.find({_id:req.body.postId})
    console.log("result", result)
    console.log("res2", res2)
    return res2
  }catch(error){
    console.log("error to fetch editTrip", error)
  }

})


 app.post('/api/addTrip', async (req, res) => {
  try{ 
    
    const newTripDoc = new Trip(req.body)
    const trip1 = await newTripDoc.save();
    if(trip1 !== newTripDoc)
    {      
      res.status(500).json({"message":"not save correctly"}) 
      return
    }
    res.status(200).send()
  }
  catch(err){
    res.status(500).json({"message":"not save correctly"}) 
    return;
  }
  
});


app.get('/weather',async (req, res) => {
  try{
    const region = JSON.parse(req.query["region"])
    const url = weather_url_1 + region + weather_url_2
    // console.log(url)
    const _result = await axios.get(url)
    const result = {
      temp:Math.round(_result.data.main.temp), 
      wind:_result.data.wind.speed,
      humidity:_result.data.main.humidity, 
      location:_result.data.name,
      imgSrc:`http://openweathermap.org/img/w/${_result.data.weather[0].icon}.png`, 
      descriptionImg:_result.data.weather[0].description
    }

    res.status(200).send(JSON.stringify(result))
    return 
  }catch(error){
    console.log(error, " error in weather fetch")

  }
})

app.post('/wiki',async (req, res) => {
  try{
    const region = JSON.parse(req.query["region"])
    console.log("region" , region)
    const url = wik1 + region + wik2
    console.log(url)
    const _result = await axios.get(url)
    res.status(200).send()
    return 
  }catch(error){
    console.log(error, " error in wiki fetch")
  }
})

// app.newTrip('/country/:countryId',(req, res) => {

//   const {startCountry} = req.body;
//   if (!startCountry) return res.status(400).JSON({'message':"bad request."})

//   try{
//     const newTrip=TripSchema.create({
//     "startCountry": startCountry
//   });
//   res.status(201).JSON({'succes': 'new trip ${newTrip} added'})
//   }
//   catch(err){
//     res.status(500).JSON({'message': err.message})
//   }
// });



// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });


// const MyModel = mongoose.model('Test', new Schema({ name: String }));
// await MyModel.findOne();

// try{



// async function func(){

//     const user = new User({id:"123"})
//     console.log(user)
//     await user.save().then(() => console.log("user saved")) 

// }

// func();



// }
// catch{(error)=>
//     console.log("catch error")
// }