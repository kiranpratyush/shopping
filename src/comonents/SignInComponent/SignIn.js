import React from "react";

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
            <form onSubmit ={this.handleSubmit}>
                <label >
                    Email
                </label>
                <input type="email" name ="email" value= {this.state.email} onChange ={this.handleChange}></input>
                <label>
                    Email
                </label>
                <input type="password" name ="password" value= {this.state.password} onChange ={this.handleChange}></input>
                <button type="Submit">Submit</button>
            </form>

        </div>
    )
  }
}

export default SignInComponent
