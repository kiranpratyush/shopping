import Homepage from './pages/HomePage/homepage';
import './App.css';
import {Route,Switch} from "react-router-dom"

function Hats()
{
  return <div>Hats</div>
}

function App() {
  return (
    <div>
      <Switch>
      <Route exact path ="/" component ={Homepage} />
      
      <Route  path ="/shop/hats" component ={Hats} />
      
      </Switch>
    </div>
  );
}

export default App;
