import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper Case", "success");
    }
    const handleLoclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower Case", "success");
    }
    const handleCleartext = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleInputChange = (event) => {
        setText(event.target.value);

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!", "success");


    }
    const handleRemoveSymbols = () => {
        let newText = text.replace(/[^\w\s]/gi, '');
        setText(newText);
        props.showAlert("Symbols removed!", "success");
    };

    const handleCountVowels = () => {
        const vowels = text.match(/[aeiouAEIOU]/g);
        const count = vowels ? vowels.length : 0;
        props.showAlert(`Vowel Count: ${count}`, "success");
    };
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Analyze your Text Here</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className='form-label'></label>
                    <textarea className="form-control" value={text} onChange={handleInputChange} id="myBox" rows="5" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upper case</button>
                <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lower case</button>
                <button className="btn btn-primary mx-2" onClick={handleCleartext}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSymbols}>Remove Symbols</button>
                <button className="btn btn-primary mx-2" onClick={handleCountVowels}>Count vowels</button>
            </div>
            <br />
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h4 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your Text Summary </h4>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.trim().split(/\s+/).filter((word) => word.length !== 0).length
                } words and {text.length} characters</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{0.008 * text.split(" ").length} minutes took to read </p>
                <h4 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h4>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    );
}
