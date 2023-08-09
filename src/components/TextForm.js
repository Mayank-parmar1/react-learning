import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("converted to uppercase","success");
    }
    const handleloClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("converted to lowercase","success");

    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)

    }

    const handlecopy=()=>{
        console.log("i am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("copied","success");


    }

    const [text, setText] = useState('Enter text here2'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        
        <div className="container"  style={{color:props.mode==='dark'?'white':'grey'}} > 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='dark'?'white':'grey'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handlecopy}>ConyText</button>


        </div>
        <div classNmae="container my-3" style={{color:props.mode==='dark'?'white':'grey'}}>
            <h2>YOUR TEXT SUMMARY</h2>
            <h4>total words:{text.split(" ").length}</h4>
            <h4>total characters:{text.length}</h4>
            <h4>total time to read:{0.008 * text.split(" ").length}</h4>
        </div>
        </>
        
    )
}

