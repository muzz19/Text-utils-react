import React, { useState } from 'react'

export default function About() {
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const [mystyle, setMystyle] = useState({
        color: "black",
        backgroundColor: "white",
    })
    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMystyle({
                color: "white",
                backgroundColor: "black",
            });
            setBtnText("Enable Light Mode");
        } else {
            setMystyle({
                color: "black",
                backgroundColor: "white",
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className="container" style={mystyle}>
            <h1>About Us</h1>
            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne" style={mystyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <strong> Analyze your text</strong>
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" style={mystyle} aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body" >
                        Textutils gives you a way to analyze your  text quickly and efficiently. Be it word count, character count or conversions.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo" style={mystyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to use</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" style={mystyle} aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree" style={mystyle}>
                        <h5 className="mb-0">
                            <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser friendly</strong>
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className="collapse" style={mystyle} aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body" >
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container mb-3">
                <button onClick={toggleStyle} className="btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
