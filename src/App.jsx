import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RandomSuperhero from './components/RandomSuperhero';
import './App.css'
import SuperheroForm from './components/SuperheroForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';
import Div1 from './components/Styles/Background.styles';
import createSuperheroesJSON from './hero_db'; 

function App() {

  const [superheroes, setSuperheroes] = useState([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);
  

  function mapDataToNew (superhero){
    return {
      id: superhero.id,
      name: superhero.name,
      powerstats: { 
    intelligence: superhero.intelligence,
    strength: superhero.strength,
    speed: superhero.speed,
    durability: superhero.durability,
    power: superhero.power,
    combat: superhero.combat,
      },
    images: {
      md: superhero.images.md
    }
  };

    }

    
  useEffect(() => {
    // GET request to fetch superhero data
    fetch('http://localhost:3000/superheroes')
      .then((response) => response.json())
      .then((data) => {
        const flattenedData = data.map(mapDataToNew);

        const jsonSuperheroes = createSuperheroesJSON(flattenedData);

      setSuperheroes(jsonSuperheroes);
      setFilteredSuperheroes(flattenedData);
    })
       
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  const addSuperhero = (newSuperhero) => {
    
    const formattedNewSuperhero = {
      id: newSuperhero.id,
      name: newSuperhero.name,
      powerstats: {
        intelligence: newSuperhero.intelligence,
        strength: newSuperhero.strength,
        speed: newSuperhero.speed,
        durability: newSuperhero.durability,
        power: newSuperhero.power,
        combat: newSuperhero.combat,
      },
      images: {
        md: newSuperhero.images.md,
      },
    };

//adds superhero to the existing array of superheroes
  
    setSuperheroes([...superheroes, formattedNewSuperhero])

    
  
  
}

  return (
<>
   
    <Router>
    <Div1 className='App'>
      <Navbar  />
      <Header  />
      <Routes>
        <Route exact path="/" element={<RandomSuperhero superheroes={filteredSuperheroes} />}/>
        <Route path = '/AddSuperhero' element = {<SuperheroForm OnSuperheroSubmit = {addSuperhero}/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </Div1>
      </Router>
      
      </>
  );
}

export default App

