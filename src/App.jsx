import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RandomSuperhero from './components/RandomSuperhero';
import './App.css'
import SuperheroForm from './components/SuperheroForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';






function App() {

  const [superheroes, setSuperheroes] = useState([]);
  const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);

 
  
  useEffect(() => {
    // GET request to fetch superhero data
    fetch('http://localhost:3000/superheroes')
      .then((response) => response.json())
      .then((data) => {
        setSuperheroes(data);
        setFilteredSuperheroes(data);
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

    
    <Router>
      <div className="App">
      <Navbar  />
      <Header  />
      <Routes>
        <Route exact path="/" element={<RandomSuperhero superheroes={filteredSuperheroes}/>}/>
        <Route path = 'AddSuperhero' element = {<SuperheroForm OnSuperheroSubmit = {addSuperhero}/>}/>
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
      </Router>
    
  );
}

export default App
