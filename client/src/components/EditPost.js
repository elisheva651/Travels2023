import React, {useState} from 'react';

import {Dialog, Button,  DialogContentText,DialogContent ,DialogTitle, TextField} from '@mui/material';
import FormGeneric from './FormGeneric';
import TripLables from '../assets/TripLables';

export default function EditPost({values, setValues, postArray, setPostArray,editConsts, setEditConsts}) {

  const handleCancle = ((e) => {
    const _editConst = {...editConsts, dialogEditMessage:"", openEditDialog:false, postId:""}
    setEditConsts(_editConst)
  })
  
  async function handleSubmitFunc (dataTrip){
    const options = {
      method:"POST", 
      headers:{"content-type":"application/json"
  
      },
      body:JSON.stringify({postId:editConsts.postId ,dataTrip:dataTrip})
  
    }
    const _editConst = {...editConsts, dialogEditMessage:"", openEditDialog:false, postId:""}
    setEditConsts(_editConst)
    setValues({})
    const resultPost = await fetch(process.env.REACT_APP_API + '/api/editPost', options).then(res => {
      if(res.ok) {console.log("edit complete")}
      else{
        {console.log("edit failed")}
      }
  
      })
    setPostArray(postArray.filter(item => item._id !== editConsts.postId))
    setPostArray([...postArray, resultPost]) 

    }
  
      return(
          <div>
            <Dialog open={editConsts.openEditDialog}>
          <DialogTitle sx={{fontWeight:"bold"}}>You can edit the post</DialogTitle>
          <DialogContent>
            <DialogContentText> {editConsts.dialogEditMessage}</DialogContentText>
          </DialogContent>
          <FormGeneric formTitle={"finish and submit"} lables={TripLables.lables} handleSubmitFunc={handleSubmitFunc} values={values}></FormGeneric>
         
          <Button onClick={()=>handleCancle()} sx={{color:"red"}}>
            Cancel
          </Button>
          
        </Dialog>
          </div>
      );
  




}