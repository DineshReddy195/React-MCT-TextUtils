import {React,useState} from 'react'
import { NavLink } from 'react-router-dom'
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup } from '@mui/material';
import { Switch } from '@mui/material';

function TextUtils() {
    const[theme,setTheme]=useState(true);
    const handleSwitch=()=>{
        setTheme(!theme)
      }
  return (
    <div id='container' className={theme?"light":"dark"}>
      <div className='nav'>
        <NavLink to="/" className="textutils">TextUtils</NavLink>
        <NavLink to="/Home" className="home">Home</NavLink>
        <div className='switch'>
        <FormGroup>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label={theme===false ? "Enter Light Mode":"Enter Dark Mode"}
          labelPlacement="end"
          onClick={handleSwitch}
        />
    </FormGroup>       
          </div>
      </div>
      <div className='content'>
        <h1 className='heading'>Hey, Welcome to TextUtils App</h1>
        <h2 className='h2'>Click on Home to analyze your text</h2>
      </div>
    </div>
  )
}

export default TextUtils
