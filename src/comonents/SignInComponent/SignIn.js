import React from "react";
import "./SignIn.css"
import FormInput from "../formInput/FormInput";
import Button from "../ButtonComponent/Button";
import SignIn from "../../FireBase/firebase";
class SignInComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e)
  {   
      e.preventDefault()
      this.setState({email:"",password:""})
  }
  handleChange(e)
  {   
      this.setState({[e.target.name]:e.target.value},()=>console.log(this.state.email,this.state.password))
  }
  render()
  { 
    return(
        <div className="formContainer">
            <h1>I already have an account</h1>
            <p>Sign in with your email and password</p>
            <form onSubmit ={this.handleSubmit} className="Form">
                {/* <label >
                    Email
                </label>
                <input type="email" name ="email" value= {this.state.email} onChange ={this.handleChange}></input> */}
                <FormInput handleChange ={this.handleChange} name ="email" value = {this.state.email} type="email" label="Email"/>
                <FormInput handleChange ={this.handleChange} name ="password" value = {this.state.password} type="password" label="Password"/>
                <Button text ="SIGN IN" color ="black" type ="submit" width="200px" height="60px" />
                <Button text ="SIGN IN WITH GOOGLE" color ="black" type ="submit" width="200px" height="60px" onClick ={SignIn} />

            </form>

        </div>
    )
  }
}

export default SignInComponent
