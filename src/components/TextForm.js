import React, { useState } from 'react';
 



export default function TextForm( props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "Success");
    }
    const handleLoClick = () => {
        console.log("lower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "Success");
    }
    const handleLiClick = () => {
        console.log("lower case was clicked" + text);

        setText("");
        props.showAlert("Text has been cleared", "Success");
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    

    return ( 
        <>
          <div>
            <div className="mb-3">
              <h1 style={{color : props.mode==='dark'?'white':'black'}}>Enter your text area</h1>
            
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}  style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}} >
                </textarea>

            
            </div>
            <div className="conatiner my-3">
            <button className='btn btn-primary' onChange={handleOnChange} onClick={handleUpClick}>Convert to upper case</button>
            <button className='btn btn-primary mx-2' onChange={handleOnChange} onClick={handleLoClick}>Convert to Lower case</button>
           <button className='btn btn-primary mx-2' onChange={handleOnChange} onClick={handleLiClick}>Clear Text</button>

            </div>
            <div className="container my-2 " style={{color : props.mode==='dark'?'white':'#042743'}}>
              <h1>Your text summary</h1>
              <p>This text has {text.length} characters and {text.split("").length} words</p>
             <p>This text will take {0.008 *text.split("").length} seconds to read</p>
             <h2>Preview</h2>
             <p>{text.length>0?text:"Enter something in text box to preview it here"}</p>
            </div>
            </div>
      

     </>
    
    
)
}







// value = { text }
// onChange = { handleOnChange }
// style = {
//     { backgroundColor: props.mode === 'dark' ? '#042743' : 'white  ' } }