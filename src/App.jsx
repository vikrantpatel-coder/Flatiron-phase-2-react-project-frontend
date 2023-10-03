import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SuperheroList from './components/SuperheroList'
import Randomsuperhero from './components/RandomSuperhero';




function App() {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    // GET request to fetch superhero data
    fetch('http://localhost:3000/superheroes')
      .then((response) => response.json())
      .then((data) => {
        setSuperheroes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div>
      <Header/>
      <SuperheroList superheroes = {superheroes}/>
      <Randomsuperhero superheroes = {superheroes}/>
    </div>
      
    </>
  )
}

export default App
