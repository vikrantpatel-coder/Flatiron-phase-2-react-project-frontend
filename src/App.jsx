import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RandomSuperhero from './components/RandomSuperhero';
import './App.css'
import SuperheroForm from './components/SuperheroForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';
import Div1 from './components/Styles/Background.styles';


function App() {

  const [superheroes, setSuperheroes] = useState([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);
  

  function mapDataToNew (superhero){
    return {
      id: superhero.id,
      name: superhero.name,
      powerstats: { 
    intelligence: superhero.powerstats.intelligence,
    strength: superhero.powerstats.strength,
    speed: superhero.powerstats.speed,
    durability: superhero.powerstats.durability,
    power: superhero.powerstats.power,
    combat: superhero.powerstats.combat,
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
      setSuperheroes(flattenedData);
      setFilteredSuperheroes(flattenedData);
    })
       
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

//adds superhero to the existing array of superheroes
  const addSuperhero = (newSuperhero) => {
    setSuperheroes([...superheroes, newSuperhero])

    
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

