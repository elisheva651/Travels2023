// The component let you search trip by few fields

import React, {useState, useEffect} from 'react';
import TripLables from '../assets/TripLables';
import FormGeneric from './FormGeneric';
import RenderPosts from './RenderPosts';


export default function Search(){

  const [posts, setPosts] = useState([])

  async function HandleSearchTrip(dataTrip) {

    console.log("data trip", dataTrip)
    fetch(process.env.REACT_APP_API + `/search?data=${JSON.stringify(dataTrip)}`).then(res =>  res.json()).then((list)=>setPosts(list)).catch((error) => {
        console.log(error, "error in catch")
        
      });
    
    console.log("in return search , posts = ",  posts)
    }
  
    
  
    return(
      <div style={{width:"99%"}}>
        <FormGeneric formTitle={"Search"} lables={TripLables.lables.filter(label => {if(label === "imgs"){return false}else{return true}})} handleSubmitFunc={HandleSearchTrip}></FormGeneric>
        <RenderPosts postsArray={posts}></RenderPosts>

      </div>
    )

};