
import React, {useState, useEffect} from 'react';
import RenderPosts from './RenderPosts';


export async function HandleAddTrip  (dataTrip) {
 
    const options = {
      method:"POST", 
      headers:{"content-type":"application/json"
  
      },
      body:JSON.stringify(dataTrip)
  
    }
    console.log(JSON.stringify(dataTrip))
  
    fetch(process.env.REACT_APP_API + '/api/addTrip', options).then(res => {
      if(res.ok) {console.log("add complete")}
  
    })
   
  
  };


export async function HandleSearchTrip(dataTrip) {

  const [posts, setPosts] = useState([])
  console.log("data trip", dataTrip)
  fetch(process.env.REACT_APP_API + `/search?data=${JSON.stringify(dataTrip)}`).then(res => setPosts(res.json())).catch((error) => {
      console.log(error, "error in catch")
      
    });
  
  console.log("in return search , posts = ",  {posts})

  return (
    <div>
      <RenderPosts postsArray={{posts}}></RenderPosts>
        {/* <DeleteItem nameOfSchema={"TripSchema"} id={"title"}/> */}
    </div>
  )

  };

