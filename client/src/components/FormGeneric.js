// The comonent have the input:
//    1.form title 
//    2.lables
// The component render the form with the "title" , and the input fields "lables".


import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { Button  } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ImagesShow from './ImagesShow';
import './Styles.css'


export default function FormGeneric({formTitle, lables, handleSubmitFunc, values}) {

  const [dataTrip, setDataTrip] = useState(values? values : {});
  const [imgList, setImgList] = useState(values === undefined ? []: values["imgs"] )

  const handleChange = ((e) => {
      
    setDataTrip((prev) => {
      let helper = {...prev};
      helper[e.target.id] = e.target.value;
      e.target.value || delete helper[e.target.id]
      // console.log(dataTrip, " dataTrip");
      return helper;
    })

  });


  return (
    <div sx={{width: '100%'}}>
        <Box className="custom-num"  >
        {lables.map((name) => {
          if(name === "imgs")
          {            
            return(
                <ImagesShow imgList={imgList} setImgList={setImgList} dataTrip={dataTrip} setDataTrip={setDataTrip}/>  
            );
          } 
          else{
          return (
          <div>
          <TextField onChange={handleChange} 
                label={name }
                id={name}
                defaultValue={values ? values[name]:""}
                sx={{ m: 1 }}
                InputProps={{
                  startAdornment: <InputAdornment  position="start"></InputAdornment>,
                }}
              />
          </div>
          );}})} 
          <Button class="submitSX" onClick={() => handleSubmitFunc(dataTrip)} type="submit" variant="outlined" >{formTitle}</Button>
        </Box>  
      </div>
      
    );
  }