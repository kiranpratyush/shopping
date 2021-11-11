import React from "react";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { authValue } from "../../FireBase/firebase";
function Header({ authStatus }) {
  return (
    <div className="Header">
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/shop">SHOP</Link>
      {authStatus ? (
        <div onClick={() => {authValue.signOut()
           console.log("i am out")
          console.log(authValue)}} style ={{cursor:"pointer"}}>SIGNOUT</div>
      ) : (
        <Link to="/SignIn">SIGNIN</Link>
      )}
    </div>
  );
}

export default Header;
