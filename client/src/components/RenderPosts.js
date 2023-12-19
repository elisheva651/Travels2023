// the component will render the input posts 
// the inputs of the component is the array of posts.
import React, {useState, useEffect} from 'react';
import TripLables from '../assets/TripLables';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DeletePost from './DeletePost';
import { Button, ImageList,  ImageListItem} from '@mui/material';
import EditPost from './EditPost';
import ShowRegion from './ShowRegion';
import './Styles.css'

export default function RenderPosts({postsArray, setPostArray}) {

  // const defaultImg = process.env.PUBLIC_URL + '/images/main.jpg'
  const[values, setValues] = useState({})
 

  // edit code
  const [editConsts, setEditConsts] = useState({
    openEditDialog:false,
    dialogEditMessage:"",
    postId:""
  })
  

  const handelEditClick = ((e) =>{

    const  message=`You can edit - "${e['title']}" trip now`
    const _editConsts = {...editConsts, openEditDialog:true, dialogEditMessage:message, postId:e["_id"]}
    setEditConsts(_editConsts)
    const _values = {}
    TripLables.lables.map((label) => {
      _values[label] = e[label]
    })
    setValues(_values)

  });

  
  // delete code
  const [deleteConsts, setDeleteConsts] = useState({
    openDeleteDialog:false,
    deleteDialogMessage:"",
    postId:""
  })
  
  const handelDeleteClick = ((e) =>{
    const  message = `Do you sure you want to remove the trip - ${e["title"]}?`
    const _deleteConsts = {...deleteConsts, postId:e["_id"], openDeleteDialog:true , deleteDialogMessage:message}
    setDeleteConsts(_deleteConsts)
    // setDeleteConsts(({...deleteConsts,openDeleteDialog:true}))
    
    });
  // end delete code


  return(
    <div className='flex'> 
      {postsArray.map((post) => {
        const photos = post["imgs"].length === 0 ? [] : post["imgs"]
        return(
          <div className='cards'>
            <div className='titleBig'>{post["title"]}</div>

            <ImageList  variant="quilted"  >
              {photos.map((item, ind) => (
              <ImageListItem key={ind} cols={item.cols || 1} rows={item.rows || 1}>
                <img src={item} alt={item.title} loading="lazy" />
              </ImageListItem>
              ))}
            </ImageList>
            
            {TripLables.lables.filter(label => {if(label === "imgs" || label==="title"){return false}else{return true}}).map((curLable) => {
            return(post[curLable] ? 
            <div className='contentPost'> <div className='label'>{curLable} {' : '} </div><div className='data'>{post[curLable]}  </div></div> :null);})}
       
          {post["region/district"] && post["start country"]? <ShowRegion region={post["region/district"]} startCountry={post["start country"]} /> : null}
          <DeleteIcon className='deleteAndEditButtons' onClick={()=>handelDeleteClick(post)}/>
          <EditIcon className='deleteAndEditButtons'  onClick={()=>handelEditClick(post)}></EditIcon>
          </div>
        );  })}
      <DeletePost deleteConst={deleteConsts} setDeleteConst={setDeleteConsts} setPostArray={setPostArray} postArray={postsArray}></DeletePost>
      <EditPost values={values} setValues={setValues} editConsts={editConsts} setEditConsts={setEditConsts} setPostArray={setPostArray} postArray={postsArray}/>
    </div>
  );
};