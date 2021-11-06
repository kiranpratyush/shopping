import React from "react"
import "./menuitem.css"
import {withRouter} from 'react-router-dom'
function MenuItems({title,image,match,linkUrl,history})
{   
    return(
        <div className="menu-items" style ={{backgroundImage:`url("${image}")`}} onClick = {()=> history.push(`${match.url}${linkUrl}`)
      } >
        <div className ="title">
        <h1>{title}</h1>
        <span>shop Now</span>
        </div>
      </div>
    )
}


export default withRouter(MenuItems)