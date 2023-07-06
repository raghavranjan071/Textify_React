import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick= ()=>{
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange= (event)=>{
    console.log("OnChange");
    setText(event.target.value);
  }

  //here we are using hooks
  const [text,setText] = useState("Enter text here");
   
  return (

    <>
    {/* <h1>{props.heading} - {text}</h1> */}
    <h1>{props.heading}</h1>
    <div>
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

    <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
    </div> 
    

    </div>

    </>

  )
}
