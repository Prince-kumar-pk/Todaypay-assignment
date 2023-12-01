import React, { useContext } from 'react'
import { Context } from './ContextApi'
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
const Navbar = () => {
  
const {isDark,setIsDark} = useContext(Context);
  console.log(isDark)
  const handleonclick =function() {
    if(isDark){
      setIsDark(false)
    }else{
      setIsDark(true)
    }
  }
  return (

       <nav className={`absolute top-0 left-0 right-0 z-50 bg-transparent p-4 flex items-center justify-evenly ${isDark?'bg-slate-400':'bg-transparent'}`}>
      <div className="text-black text-xl w-2/3 font-bold">Forex Calculator</div>
      <div className="flex items-center">
        <div className="flex items-center">
          <div className=" text-black text-lg mr-2 cursor-pointer" >
            {isDark?
            <IconButton onClick={handleonclick} ><LightModeIcon/></IconButton> :
            <IconButton onClick={handleonclick} ><NightlightIcon/></IconButton>
          }
          </div>
          <div className=" text-black text-lg cursor-pointer inline"> <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/62721/india-flag-emoji-clipart-xl.png" alt="india" width="20" height="20" /></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar