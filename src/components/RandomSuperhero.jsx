import React, {useState, useEffect} from "react";

const RandomSuperhero = ({superheroes}) => {
    const [randomHero, setRandomHero] = useState(null);


    useEffect(() => {
        // Generates a random superhero
        const randomIndex = Math.floor(Math.random() * superheroes.length);
        const randomSuperhero = superheroes[randomIndex];
        setRandomHero(randomSuperhero);
      }, [superheroes]);
    
      return (
        <div>
          <h2>Random Superhero</h2>
          {randomHero ? (
            <div>
              <h3>{randomHero.name}</h3>
              <img src={randomHero.images.sm} alt={randomHero.name} />
              <p>Intelligence: {randomHero.powerstats.intelligence}</p>
              <p>Strength: {randomHero.powerstats.strength}</p>
              <p>Speed: {randomHero.powerstats.speed}</p>
              <p>Durability: {randomHero.powerstats.durability}</p>
              <p>Power: {randomHero.powerstats.power}</p>
              <p>Combat: {randomHero.powerstats.combat}</p>
            </div>
            ) : (
                <p>Loading random superhero...</p>
              )}
          
        
        </div>
      );
    };
export default RandomSuperhero