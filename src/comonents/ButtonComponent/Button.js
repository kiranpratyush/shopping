
import React from "react"
import SignIn from "../../FireBase/firebase"
import "./Button.css"


function Button({text,color,width,height,...other})
{
    return(
        <button {...other}style={{backgroundColor:color,height:height,width:width}} onClick ={SignIn}>{text}</button>
    )
}

export default Button