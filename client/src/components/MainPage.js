import React, {useState, useEffect} from 'react'
import RenderPosts from './RenderPosts';

export default function MainPage() {


  const [posts, setPosts] = useState([]);
  // const [isErrorCountries, setIsErrorCountries] = useState(false);


  useEffect(() => {
    fetch(process.env.REACT_APP_API + '/allPosts').then(res => res.json()).then((json) => {
           

      setPosts(json);
    }).catch(error => {
      console.log(error, "error in catch")
     
    });
    
  }, []);
  return (
    <div>
      
      <RenderPosts postsArray={posts} setPostArray={setPosts}></RenderPosts>
        {/* <DeleteItem nameOfSchema={"TripSchema"} id={"title"}/> */}
    </div>
  )
}
