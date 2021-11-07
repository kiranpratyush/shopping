import Homepage from './pages/HomePage/homepage';
import './App.css';
import ShopPage from './pages/ShopPage/ShopPage';
import {Route,Switch} from "react-router-dom"
import Header from './comonents/HeaderComponent/header';
import SignIn from './pages/SignInPage/SignIn';
import React from 'react';
import {authValue} from "./FireBase/firebase"


class App extends React.Component {

  constructor()
  {
    super()
    this.state ={currentUser:null}
  }
  unsuscribe = null;
  componentDidMount()
  {
    this.unsuscribe =authValue.onAuthStateChanged((user)=>
    {
      this.setState({currentUser:user})
      console.log(authValue)
    })
  }
  componentWillUnmount()
  {
    this.unsuscribe()
  }

  render()
  {
  return (
    <div>
      <Header authStatus ={this.state.currentUser}/>
      <Switch>
      
      <Route exact path ="/" component ={Homepage} />
      <Route  path ="/shop" component={ShopPage}/>
      <Route path ="/signIn" component={SignIn} />
      
      
      </Switch>
    </div>
  );
  }
}

export default App;
