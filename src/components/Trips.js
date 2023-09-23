import React, {useState} from 'react';
import './Styles.css';

import Typography from '@mui/material/Typography';


export default function Trips({selectedCountries=[]}) {

  const data = [
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

  return (
    <div>

    {selectedCountries.map((country) => {
    const countryData = data.find(item => item.id === country)  
    console.log("country data", countryData, ", /n data", data)
    return(
    <div className='cards' key={'imageCard' + country} country={country}>
        <img 
          component="img"
          height="140"
          src={countryData.image}
        />
          <div>{country}</div>
          <Typography gutterBottom variant="h5" component="div">
            <a href={countryData.URL}>Visit in Wikipedia {countryData.tripTitle} page</a>
            pechem ben papa rami bar papa
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            {country.content}
          </Typography>
       
    </div>)})}

    </div>
  );

}