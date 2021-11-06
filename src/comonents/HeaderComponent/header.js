import React from 'react'
import {ReactComponent as Logo} from "../../Assets/crown.svg"
import {Link} from "react-router-dom"
import "./header.css"
function Header()
{
    return(
        <div className ="Header">
            
            <Link to ="/"><Logo /></Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/signIn" > SignIn</Link>

        </div>
    )
}

export default Header