import { Button, Dialog, DialogContent  } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Weather from './Weather';
import './Styles.css'
import InfoIcon from '@mui/icons-material/Info';


export default function ShowRegion({region, startCountry}) {


   
    // const wikiUrl = "https://en.wikipedia.org/wiki/"   + region
    const imgSrc = "https://en.wikipedia.org/wiki/" + region +"#/media/file[0]"
   
    const [openInfoWiki, setOpenInfoWiki] = useState(false)

    async function openWikiPage(e){

        const options = {
            method:"POST", 
            headers:{"content-type":"application/json"},
            body:JSON.stringify(region)
            }
        const page = await fetch(process.env.REACT_APP_API + "/wiki", options).then((res)=> {if(res.ok) setOpenInfoWiki(true)}).then(res=>res.json())
        console.log("page ", page)
        return(
            <Dialog open={openInfoWiki}>
                <DialogContent>
                    {page}
                </DialogContent>
                <Button onClick={(e)=>{setOpenInfoWiki(false)}}>close</Button>
            </Dialog>
        );
    };

    return(
        <div  className='regionCss' >
            <div className='title'>{region} Info</div>
            
            <Weather region={region}  ></Weather>
            <Button sx={{alignContent:"center"}} onClick={(e)=>openWikiPage(e)}>
                <InfoIcon style={{color:'black'}}></InfoIcon>
                <div className="h10">read more about {region}</div>
            </Button>
        </div>
    );
}