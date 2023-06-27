import React, { useState } from 'react'

const [text,setText] = useState("Enter text here");

export default function TextForm(props) {
  const [text,setText] = useState("Enter text here");
   
  return (

    <>
    <h1>{props.heading} - {text}</h1>
    <div>
       <form>
  <div class="mb-3">
    <label for="myBox" className='form-label'>Example textarea</label>
    <textarea class="form-control" id="my-box" rows="3">Convert to uppercase</textarea>
    </div>
</form>

    </div>

    </>

  )
}
