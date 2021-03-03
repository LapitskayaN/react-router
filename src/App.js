import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar"
import Home from "./components/home"
import PlanetList from "./components/planet-list"
import ClickedPlanet from "./components/clicked-planet"
import Footer from "./components/footer"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src="https://cdn.commonwealthclub.org/s3fs-public/styles/hero/public/2019-11/hero%20star%20wars.png?itok=waMDC-JL" ></img> 
        <h1>PLANETS</h1>  
   
        <Navbar />
        <Switch> 
          <Route exact path="/" render={(props)=> <Home {...props}/>} />
          <Route exact path="/list" render={(props)=> <PlanetList {...props}/>} />
          <Route exact path="/movie" render={(props)=> <ClickedPlanet {...props}/>} />
        </Switch>
        
      </header>
      <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
