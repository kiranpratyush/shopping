import Homepage from './pages/HomePage/homepage';
import './App.css';
import ShopPage from './pages/ShopPage/ShopPage';
import {Route,Switch} from "react-router-dom"
import Header from './comonents/HeaderComponent/header';
import SignIn from './pages/SignInPage/SignIn';


function App() {
  return (
    <div>
      <Header />
      <Switch>
      
      <Route exact path ="/" component ={Homepage} />
      <Route  path ="/shop" component={ShopPage}/>
      <Route path ="/signIn" component={SignIn} />
      
      
      </Switch>
    </div>
  );
}

export default App;
