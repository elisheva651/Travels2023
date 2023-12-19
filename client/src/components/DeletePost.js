// The component have the arguments:
//      1.name of schema
//      2.id (each schema should have id with practical meaning, not the _id of mongoose)
//The component delete the item with the "id" from the collection with the "name of schema"  

import React, {useState} from 'react';

import {Dialog, Button,  DialogContentText,DialogContent ,DialogTitle, TextField} from '@mui/material';
import MainPage from './MainPage';



export default function DeletePost({deleteConst, setDeleteConst, setPostArray, postArray}) {

    const handleChooseDelete = ((e) =>{
      setDeleteConst({message:"", openDialog:false})
      console.log("postId", deleteConst.postId)
      const options = {
        method:"DELETE", 
        headers:{"content-type":"application/json"
    
        },
        body:JSON.stringify({_id:deleteConst.postId})
    
      }
      fetch(process.env.REACT_APP_API + '/api/deleteTrip', options).then(res => {
      if(res.ok) {console.log("delete complete")}
  
      })
      // fetch delete

      setDeleteConst({postId:""})
      setPostArray(postArray.filter(item => item._id !== deleteConst.postId))

    })

    const handleChooseNotDelete = ((e) => {
      const _deleteConsts = {...deleteConst,deleteDialogMessage:"", openDeleteDialog:false, postId:""}
      setDeleteConst(_deleteConsts)
     
    })


    return(
        <div>
          <Dialog open={deleteConst.openDeleteDialog}>
        <DialogTitle sx={{fontWeight:"bold"}}>Verification alert!</DialogTitle>
        <DialogContent>
          <DialogContentText> {deleteConst.deleteDialogMessage}</DialogContentText>
        </DialogContent>
        <Button onClick={()=>handleChooseDelete()} sx={{color:"green"}}>
          Yes
        </Button>
        <Button onClick={()=>handleChooseNotDelete()} sx={{color:"red"}}>
          No
        </Button>
        
      </Dialog>
        </div>
    );


}
