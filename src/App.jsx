import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import RandomSuperhero from './components/RandomSuperhero';
import './App.css'



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
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePublisherChange = (publisher) => {
    if (publisher === "") {
      
      setFilteredSuperheroes(superheroes);
    } else {
     
      const filtered = superheroes.filter((superhero) => superhero.publisher === publisher);
      setFilteredSuperheroes(filtered);
    }
  };


  return (
    <>
      <div className="App">
        <Header superheroes={filteredSuperheroes} onPublisherChange={handlePublisherChange} />
        <RandomSuperhero superheroes={filteredSuperheroes}   /> 

      </div>
    </>
  );
}

export default App
