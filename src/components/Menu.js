import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';


export default function Menu() {

const [click, setClick] = useState(false)

function handelClick()
{
setClick(click => !click)
} 
  

  return (
    <div>
        Travels 
        <MenuIcon  >
            <div onClick={handelClick}>
            <h1>
                {click}
            </h1>
            </div>
            {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'}/> */}
        </MenuIcon>
    </div>
  )
}
