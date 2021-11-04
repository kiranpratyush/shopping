import React from "react"
import "./menuitem.css"
function MenuItems({title,image})
{
    return(
        <div className="menu-items" style ={{backgroundImage:`url("${image}")`}}>
        <div className ="title">
        <h1>{title}</h1>
        <span>shop Now</span>
        </div>
      </div>
    )
}


export default MenuItems