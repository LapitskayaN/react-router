import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import Home from "./components/home"
import PlanetList from "./components/planet-list"
import ClickedPlanet from "./components/clicked-planet"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>STAR WARS </h1>    
        <h3>PLANETS</h3>   
        <Navbar />
        <Switch> 
          <Route exact path="/" render={(props)=> <Home {...props}/>} />
          <Route exact path="/list" render={(props)=> <PlanetList {...props}/>} />
          <Route exact path="/movie" render={(props)=> <ClickedPlanet {...props}/>} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
