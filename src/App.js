import Homepage from "./pages/HomePage/homepage";
import "./App.css";
import ShopPage from "./pages/ShopPage/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./comonents/HeaderComponent/header";
import SignIn from "./pages/SignInPage/SignIn";
import React from "react";
import { authValue, addProfileData } from "./FireBase/firebase";
import { getDoc } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsuscribe = null;
  componentDidMount() {
    this.unsuscribe = authValue.onAuthStateChanged((user) => {
      // this will set states when the state will be changed
      if (user) {
        const ref = addProfileData(user);
        ref
          .then((data) => getDoc(data))
          .then((response) => {
            if (response.exists()) {
              this.setState({ currentUser: { ...response.data() } });
            }
          });
      }
      else{
        this.setState({currentUser:null})
      }
    });
  }
  componentWillUnmount() {
    this.unsuscribe();
  }

  render() {
    return (
      <div>
        <Header authStatus={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
