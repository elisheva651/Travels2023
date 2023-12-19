import React, {useEffect, useState} from 'react';
import './Styles.css'


export default function Weather({region})   {

    const [weatherData, setWeatherData] = useState({
      temp:"", 
      wind:"", 
      humidity:"", 
      location:"", 
      icon:"",
      descriptionIcon:""
    })

    useEffect(()=>{
        const fetchWeather = async()=>{
            fetch(process.env.REACT_APP_API + `/weather?region=${JSON.stringify(region)}`).then(res=>res.json()).then((res) => 
            {
              setWeatherData(res)  
            });
        }
        fetchWeather()
    }, [])



  return (
    <div className='weath'>

      <div >{weatherData.temp} °C</div>
        <img src={weatherData.imgSrc}>

        </img>
    </div>
  )
}
