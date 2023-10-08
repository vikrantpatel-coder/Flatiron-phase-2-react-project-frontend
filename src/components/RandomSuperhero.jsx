import React, { useState, useEffect } from "react";
import ComparePowerstats from "./ComparePowerstats";
import Button from "./Styles/Button.styles"
import Card from "./Styles/Card.styles";
import StyledImage from "./Styles/Image.styles";

const RandomSuperhero = ({ superheroes }) => {
  const [randomHero1, setRandomHero1] = useState(null);
  const [randomHero2, setRandomHero2] = useState(null);

  useEffect(() => {
    // Generates two random superheroes
    generateRandomSuperheroes();
  }, [superheroes]);

  const generateRandomSuperheroes = () => {
    const randomIndex1 = Math.floor(Math.random() * superheroes.length);
    const randomIndex2 = Math.floor(Math.random() * superheroes.length);

    const randomSuperhero1 = superheroes[randomIndex1];
    const randomSuperhero2 = superheroes[randomIndex2];

    setRandomHero1(randomSuperhero1);
    setRandomHero2(randomSuperhero2);
  };

  
  return (
    
    <div>
      <h3>SUPERHERO 1</h3>
      <div>

        {randomHero1 ? (
          <div>
            <Card>
            <h4>{randomHero1.name}</h4>
            <StyledImage src={randomHero1.images.md} alt={randomHero1.name} />
            <p>Intelligence: {randomHero1.powerstats.intelligence}</p>
            <p>Strength: {randomHero1.powerstats.strength}</p>
            <p>Speed: {randomHero1.powerstats.speed}</p>
            <p>Durability: {randomHero1.powerstats.durability}</p>
            <p>Power: {randomHero1.powerstats.power}</p>
            <p>Combat: {randomHero1.powerstats.combat}</p>
            </Card>
          </div>
        ) : (
          <p>Loading Superhero 1...</p>
        )}
      </div>

      <h3>SUPERHERO 2</h3>
      <div>
        {randomHero2 ? (
          <div>
            <Card>

            <h4>{randomHero2.name}</h4>
            <StyledImage src={randomHero2.images.md} alt={randomHero2.name} />
            <p>Intelligence: {randomHero2.powerstats.intelligence}</p>
            <p>Strength: {randomHero2.powerstats.strength}</p>
            <p>Speed: {randomHero2.powerstats.speed}</p>
            <p>Durability: {randomHero2.powerstats.durability}</p>
            <p>Power: {randomHero2.powerstats.power}</p>
            <p>Combat: {randomHero2.powerstats.combat}</p>
            </Card>
          </div>
        ) : (
          <p>Loading Superhero 2...</p>
        )}
        
      </div>
      <Button onClick={generateRandomSuperheroes}>Let The War Begin..!</Button>
      <ComparePowerstats randomHero1={randomHero1} randomHero2={randomHero2} />
      
    </div>
  );
};

export default RandomSuperhero;
