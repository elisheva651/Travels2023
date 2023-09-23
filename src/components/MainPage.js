import React, {useState} from 'react'
import CountriesToShow from './CountryToShow';
import InputCountry from './InputCountry';

const initNames = [

  'Israel', 
  'Peru', 
  'USA'
]

export default function MainPage() {
const [countries, setCountries] = useState(initNames);
const [travels, setTravels] = useState([]);
const [selectedCountries, setSelectedCountries] = useState([])
 
// const [country, setCountries] = useState({names: initNames, travels:[]})
    // console.log('country', country)
  return (
    <div>
        {/* <input type="text" onChange={(e)=>{setCountries(e.target.value)}}/> */}
        <InputCountry selectedCountries={selectedCountries} countries={countries} setSelectedCountries={setSelectedCountries}/>
        <CountriesToShow theCountry={{selectedCountries, travels}}>

        </CountriesToShow>

    </div>
  )
}
