import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Your text is converted to uppercase", "Success");
    };
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Your text is converted to lowercase", "Success");
    };
    const handleClsClick = () => {
        setText("");
        props.showAlert("Your text box is cleared", "Success");
    };
    const handleCpyClick = () => {
        document.getElementById('myBox').select();
        navigator.clipboard.writeText(text);
        props.showAlert("Your text is copied", "Success");
    };
    return (
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="my-3">
                <h1>{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Enter Your Text to Analyze</label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3" style={{backgroundColor: props.mode==='dark'? 'darkcyan': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} me-3 my-3`} onClick={handleUpClick} disabled={text.length===0}>UpperCase Text</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} me-3 my-3`} onClick={handleLowClick} disabled={text.length===0}>LowerCase Text</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} me-3 my-3`} onClick={handleClsClick} disabled={text.length===0}>Clear Text</button>
                <button className={`btn btn-${props.mode==='dark'?'dark':'primary'} me-3 my-3`} onClick={handleCpyClick} disabled={text.length===0}>Copy Text</button>
            </div>
            <div>
                <h1>Your Text Summary</h1>
                <p>No of Words: {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}</p>
                <p>No of Characters: {text.length}</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Minute(s) Read</p>
                <h1>Preview of Your Text</h1>
                <p>{text.length > 0 ? text : "Enter something in the text box to preview" }</p>
            </div>
        </div>
    );
}
