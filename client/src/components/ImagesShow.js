import React, {useState, useEffect} from 'react';
import Resizer from "react-image-file-resizer";
import DeleteIcon from '@mui/icons-material/Delete';
import Input from '@mui/material/Input';
import { Button, Dialog } from '@mui/material';

export default function ImagesShow({imgList, setImgList , dataTrip, setDataTrip}){

    const [dialogImg, setDialogImg] = useState(false)

    const reduceQuality = (imageFile) => {
      //1MB image file
      var quality = 100;
      if (imageFile.size > 100000) {
        quality = 80;
      }
      //2MB image file
      if (imageFile.size > 200000) {
        quality = 75;
      } 
      if (imageFile.size > 800000) {
        quality = 40;
      } 
      return new Promise((resolve)=>{
        Resizer.imageFileResizer(
          imageFile,
          300,
          300,
          "JPEG",
          quality,
          0,
          (uri) => {
            resolve(uri);
          },
          "blob"
        );});
    }
    

  async function convertToBinary64(file){
    const reducedImage = await reduceQuality(file);

    return new Promise((resolve, reject)=>{
    const fileReader = new FileReader();

    fileReader.readAsDataURL(reducedImage);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
    })
  }


  const handleImgsChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBinary64(file);

    setDataTrip((prev) => {
      let helper = {...prev};
      helper["imgs"]= [...imgList,base64];
      return helper;
    })
    setImgList( [...imgList, base64] )

  };

    
  const handelDeleteImg = ((photo, ind) => {
    const _imgList = imgList.slice(ind+1)
    setImgList(_imgList)
    setDataTrip({"imgs":_imgList})
  })
    

  const showImgBiggerDialog = ((photo) =>{
    return(
      <Dialog open={dialogImg}>
      <img  onClick={(e)=>{setDialogImg(!dialogImg)}}
      style={{width:"100%", height:"100%", m:"auto"}}
      src={photo}
      alt={photo}/>
      </Dialog>
    );
  
  })
    

    return(
        <div>
          <Button sx={{ m: 1 }}  onClick={(e)=>{document.getElementById("images").click(e)}}>Attach Image</Button>
          <Input  id="images" style={{display:"none" }} onChange={(e) => handleImgsChange(e)} 
            type="file" 
            accept="image/*" 
            sx={{ m: 1 }}
            position="start"
            />
          {imgList.map((photo, ind)=>{
            return(
              <div key={ind} sx={{width:"40%", height:"10%"}}>
              <img  onClick={(e)=>{setDialogImg(!dialogImg)}}
                style={{width:"40%", height:"10%", m:"auto"}}
                src={photo}
                alt={photo}
                loading="lazy"
              />
              {showImgBiggerDialog(photo)}
              <DeleteIcon className='deleteAndEditButtons' onClick={()=>handelDeleteImg(photo, ind)}/>
              </div>
            );
          })}   
        </div>
      );
}