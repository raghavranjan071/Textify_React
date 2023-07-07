import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  }

  const handleClearChange = () => {
    let newText = "";
    setText(newText)
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  //here we are using hooks
  const [text, setText] = useState("");

  return (

    <>
      {/* <h1>{props.heading} - {text}</h1> */}
      <div className='container' style={{color: props.mode === "dark" ? 'white' : 'black'} }>
        <h1 >{props.heading}</h1>

        <div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? 'grey' : 'white',color: props.mode === "dark" ? 'white' : '042743' } } id="myBox" rows="8"></textarea>

        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>

        <button className='btn btn-primary mx-2' onClick={handleClearChange}>Clear Text</button>

        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>

        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Space</button>

      </div>



      {/* Adding Extra Features */}
      <div className='container my-3' style={{color: props.mode === "dark" ? 'white' : '#042743'} }>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter something in the textbox above to preview it here"}</p>
      </div>

    </>

  )
}
