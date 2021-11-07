
import React from "react"
import "./Button.css"


function Button({text,color,width,height,google,SignIn,...other})
{ if(google)
    {
        return(
        
            <button {...other}style={{backgroundColor:color,height:height,width:width}} onClick ={SignIn}>{text}</button>
        )
    }
  else
  {
    return(
        
        <button {...other}style={{backgroundColor:color,height:height,width:width}}>{text}</button>
    )
  }
    
}

export default Button