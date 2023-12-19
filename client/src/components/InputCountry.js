import React, {useState, useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import Form from '@mui/material/FormGroup';

import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Trips from './Trips'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,

    },
  },
};


export default function MultipleSelectCheckmarks({isErrorCountries,isLoadingCountries,  setSelectedCountries, countries, selectedCountries}) {

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedCountries(value)
    

  };

  return (
    <div>

        {/* <Form> */}
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label" >Countries</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedCountries}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => ""}
          MenuProps={MenuProps}
        >

          {countries.map((name) => (
            
            <MenuItem key={name} value={name}>

              <Checkbox checked={selectedCountries.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Trips selectedCountries={selectedCountries}/>
      {/* </Form> */}
    </div>
  );
}