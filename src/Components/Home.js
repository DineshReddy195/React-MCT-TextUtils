import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup } from '@mui/material';
import copy from 'copy-to-clipboard';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { copySuccess } from './message'; 

function Home() {
  const[input,setInput]=useState("")
  const[theme,setTheme]=useState(true);
  const[preview,setPreview]=useState("")
  const handleChange=(e)=>{
    setInput(e.target.value)
    setPreview(e.target.value)
  }
  const handleUppercase=()=>{
    if(input===""){
        notify("Textbox Cannot Be Empty",true)
    }else{
    setInput(input.toUpperCase());
    notify("Input Converted To Uppercase")
    }
  }
  const handleLowercase=()=>{
    if(input===""){
        notify("Textbox Cannot Be Empty",true)
    }else{
    setInput(input.toLowerCase());
    notify("Input Converted To Lowercase ")
    }
  }
  const handleClear=()=>{
    if(input===''){
        notify("Textbox Cannot Be Empty",true)
    }else{
    setInput("");
    notify("Input Cleared From Textbox")
    }
  }
  const handleCopy=()=>{
    if(input===''){
        notify("Nothing To Copy",true)
    }else{
    copy(input);
    notify(copySuccess)
    }
  }
  const handleSpaces=()=>{
    if(input===''){
        notify("Nothing To Remove Extra Spaces",true)
    }else{
    let str=input;
    console.log(str.length);
    let regex=/\s\s+/g;
    str=str.replace(regex,' ');
    console.log(str.length);
    setInput(str)
    notify("Removed Extra Spaces")
    }
  }
  const handleSwitch=()=>{
    setTheme(!theme)
  }
  const notify=(message,hasError=false)=>{
    if(hasError){
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }else{
    toast(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <div id='container' className={theme?"light":"dark"}>
      <div className='nav'>
        <NavLink to="/" className="textutils">TextUtils</NavLink>
        <NavLink to="/Home" className="home">Home</NavLink>
        <div>
        <FormGroup>
        <FormControlLabel
          value="end"
          control={<Switch color="primary" />}
          label={theme===false ? "Enter Light Mode":"Enter Dark Mode"}
          labelPlacement="end"
          onChange={handleSwitch}
        />
    </FormGroup>
          </div>
      </div>
     <div className='main'>
      <section>
        <h2>Enter the text to analyze below</h2>
        </section>
        <section>
          <textarea className='textarea' value={input} onChange={handleChange}></textarea>
        </section>
     </div>
     <div className='buttons'>
        <button className='btn' onClick={handleUppercase}>Convert to Uppercase</button>
        <button className='btn' onClick={handleLowercase}> Convert to LowerCase</button>
        <button className='btn' onClick={handleClear}>Clear Text</button>
        <button className='btn' onClick={handleCopy}>Copy Text</button>
        <button className='btn'onClick={handleSpaces}>Remove Extra Spaces</button>
     </div>
     <div className='summary'>
        <section>
          <h3>Your Text Summary</h3>
        </section>
        <section>
          <span>{input.split(' ').length-1} words {input.split('').length} characters</span>
        </section>
        <section>
          <span>{input.split('').length*0.33} seconds read</span>
        </section>
     </div>
     <div className='preview'>
      <section className='head'>
        <h3>Preview</h3>
      </section>
      <section className='data'>{input}</section>
     </div>
     <ToastContainer
   position="top-right"
   autoClose={5000}
   hideProgressBar={false}
   newestOnTop={false}
   closeOnClick
   rtl={false}
   pauseOnFocusLoss
   draggable
   pauseOnHover
   theme="light"
/>
<ToastContainer />
    </div>
  )
}

export default Home
