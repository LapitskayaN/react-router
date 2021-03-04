import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, useParams} from "react-router-dom"

const ClickedPlanet = (props) =>{
  
  const {name} = useParams ();
  const [onePlanet, setOnePlanet] = useState(null);
  const url = 'https://swapi.dev/api/planets/'
  

  useEffect(() => {
    getOneItem();
  }, []);

  const getOneItem = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOnePlanet(data.results.find((item)=> item.name == name)))      
  };

  if (!onePlanet) return <span>loading ...</span>;

  console.log(onePlanet)


  // ({title,year, director, posterUrl}) => {
  return (
        <div className="card" >
          {!onePlanet ? (
            <h1>You havent add any movies yet...</h1>
          ) : (
            <>
        
          <h1>Name: {onePlanet.name}</h1>
          {/* <p>rotation_period : {props.location.state.randomMovie.rotation_period}</p>
          <p>orbital_period : {props.location.state.randomMovie.orbital_period}</p> */}
          <p>climate : {onePlanet.climate}</p>
          {/* <p>gravity : {props.location.state.randomMovie.gravity}</p>
          <p>terrain : {props.location.state.randomMovie.terrain}</p>
          <p>surface_water : {props.location.state.randomMovie.surface_water}</p>
          <p>population : {props.location.state.randomMovie.population}</p> */}

          {/* <img
            src={props.location.state.randomMovie.posterUrl}
            alt={props.location.state.randomMovie.title}
          />
          <p>{props.location.state.randomMovie.year}</p>
          <p>{props.location.state.randomMovie.director}</p>
          <p></p> */}

          <button>
            <Link to="list">Go back</Link>
          </button>          
          </>
      )
      }

            {/* 
            <h1>{props.lacation.state.title}</h1>
            <p>{year}</p>
            <p>{director}</p>
            <img src={posterUrl} alt={title} ></img> */}
        </div>
    )
}
 
export default ClickedPlanet;