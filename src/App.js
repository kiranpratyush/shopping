import Homepage from './pages/HomePage/homepage';
import './App.css';
import ShopPage from './pages/ShopPage/ShopPage';
import {Route,Switch} from "react-router-dom"



function App() {
  return (
    <div>
      <Switch>
      
      <Route exact path ="/" component ={Homepage} />
      <Route  path ="/shop" component={ShopPage}/>
      
      
      </Switch>
    </div>
  );
}

export default App;
