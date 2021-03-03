import React, {useEffect, useState} from "react";
import Card from "../card"

const  initialState = {
    planets: [],
    randomMovie: {},
}

const url = 'https://swapi.dev/api/planets/'

const PlanetList = (props) => {

    const [state, setState] = useState(initialState);
    useEffect(() => {
      getData()
    }, [])

    const getData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setState({
            ...state,
            planets: data.results
        }))
    }

    const getPlanet =(e) =>{
        const clickedPlanet = state.planets.find(elem => elem.name == e.target.name);
        setState ({
            ...state,
            randomMovie: clickedPlanet
        })

        props.history.push({
            pathname: '/movie',
            state: {
                randomMovie: clickedPlanet
            }
        })
       
    };

    const renderItems = () => 
        state.planets.map((elem) => (
        
        <Card 
            onClick={getPlanet}
            // key={elem.name} 
            name={elem.name}
            rotation_period = {elem.rotation_period}  
            orbital_period = {elem.orbital_period}  
            diameter = {elem.diameter}  
            climate= {elem.climate}
            gravity= {elem.gravity}  
            terrain= {elem.terrain}  
            surface_water= {elem.surface_water}  
            population= {elem.population}  
            residents= {elem.residents}  
            
            // id={elem.name}
        />
      
        ))
    

    return (
       <div className="cardList">
           {
               state.planets &&  renderItems()
           }

       </div>     
    )
}

export default PlanetList;