import React, {useState, useEffect} from 'react';
import FormGeneric from './FormGeneric';
import TripLables from '../assets/TripLables';

export default function AddTrip(){


    async function HandleAddTrip  (dataTrip) {
    
        const options = {
        method:"POST", 
        headers:{"content-type":"application/json"
    
        },
        body:JSON.stringify(dataTrip)
    
        }
    
        fetch(process.env.REACT_APP_API + '/api/addTrip', options).then(res => {
        if(res.ok) {console.log("add complete")}
    
        })
    
    
    };

  return(
    <div style={{width:"99%"}}>
        <FormGeneric formTitle={"Add trip"} lables={TripLables.lables} handleSubmitFunc={HandleAddTrip}></FormGeneric>

    </div>
  )
};
