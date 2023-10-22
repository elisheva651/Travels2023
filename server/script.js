const mongoose=require('mongoose')
const cors = require('cors')
const trip=require("./TripSchema")
const bodyParser = require('body-parser');


const express = require('express')

const TripSchema = require('./TripSchema')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port = 3000

const uri = 'mongodb+srv://trips_db:tripsdb@travels.4gvojse.mongodb.net/?retryWrites=true&w=majority&tls=true';
mongoose.connect(uri).then((x)=>{console.log("connected")}).catch(error=>{console.log("catch", error)})






app.use(cors({
    origin: '*'
}));
const countries = [
    {
      id: 'Israel',
      title: "Israel",
      tripTitle: "Mitzpe Ramon",
      content: "In Israel we recomend you to travel in Mitzpe Ramon.",
      URL: "https://en.wikipedia.org/wiki/Mitzpe_Ramon",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/MakhteshRamonMar262022_01.jpg/550px-MakhteshRamonMar262022_01.jpg"
    },
    {
      id: 'USA',
      title: "USA",
      content: "In USA we recomend you to travel in the Grand Canyon",
      tripTitle: "Grand Canyon",
      URL: "https://en.wikipedia.org/wiki/Grand Canyon",
      image: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSY7x0shpPE3J7JCulJ5cXC2vYmOCl_LNqhiUPuDeWOA3MaUUut7AM3Wt8VJzFs5gxA"
    },
    {
      id: 'Peru',
      title: "Peru",
      content: "In Peru we recomend you to travel in Machu Picchu",
      tripTitle: "Machu Picchu",
      URL: "https://en.wikipedia.org/wiki/Machu Picchu",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/540px-Machu_Picchu%2C_Peru.jpg"
    },
    ]

app.get('/countries', (req, res) => {
    const ids = countries.map((country) => (
        country.id
      ))

    res.send(ids)
        // console.log(res.status)
})

app.get('/country/:countryId', (req, res) => {
    const countryId = req.params.countryId;
    const country = countries.find(_country => _country.id === countryId);
    console.log("erver")

    if(!country){

        console.log("erver")

        res.status(400).send(JSON.stringify({message: 'id is not supported'}))
        return;
    }
    console.log(country, " country in server")
    res.send(JSON.stringify(country))

})

app.get('/account/{accountId}/project/{projectId}/trees', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




 app.post('/api/addTrip', async (req, res) => {
  try{
    // console.log(req.body, " req.body")

    // if(!req.body.startCountry || !req.body.numberOfDays)
    // {
    //   res.status(400).json({'message':"bad parameters"});
    //   return;
    // } 
    const newTripDoc = new TripSchema(req.body)
    console.log("before save")
    const trip1 = await newTripDoc.save();
    console.log("after save")

    if(trip1 !== newTripDoc)
    {
      
      console.log("in if")
      res.status(500).json({"message":"not save correctly"}) 
      return
    }
    console.log("send")
    res.status(200).send()
  }
  catch(err){
    console.log(err, "here in catch")
    res.status(500).json({"message":"not save correctly"}) 

    return;
  }
  
});

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