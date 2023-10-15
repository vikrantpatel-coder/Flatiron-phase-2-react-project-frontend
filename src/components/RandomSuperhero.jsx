import React, { useState, useEffect } from "react";
import ComparePowerstats from "./ComparePowerstats";
import Button from "./Styles/Button.styles"
import Card from "./Styles/Card.styles";
import StyledImage from "./Styles/Image.styles";
import H3 from "./Styles/SuperheroTilte.style";
// import Div1 from "./Styles/WinnerText.styles";
// import Div2 from "./Styles/Div2.styles";

const RandomSuperhero = ({ superheroes }) => {
  const [randomHero1, setRandomHero1] = useState(null);
  const [randomHero2, setRandomHero2] = useState(null);

  useEffect(() => {
    // Generates two random superheroes
    generateRandomSuperheroes();
  }, [superheroes]);


  //create random number from its starting point to the length of an array
  const generateRandomSuperheroes = () => {
    const randomIndex1 = Math.floor(Math.random() * superheroes.length);
    const randomIndex2 = Math.floor(Math.random() * superheroes.length);

    const randomSuperhero1 = superheroes[randomIndex1];//holding the value of random hero1
    const randomSuperhero2 = superheroes[randomIndex2];//holding the value of random hero2

    setRandomHero1(randomSuperhero1);
    setRandomHero2(randomSuperhero2);
  };

  
  return (
    
      

        <div>
      <H3>SUPERHERO 1</H3>
      

        {randomHero1 ? (
         
         <div>
            <Card>
            <h4>{randomHero1.name}</h4>
            <StyledImage src={randomHero1.images.md} alt={randomHero1.name} />
            {Object.keys(randomHero1.powerstats).map((stat)=> (
              <p key = {stat}>
                {stat} : {randomHero1.powerstats[stat]}
              </p>
            ))}

            </Card>
            </div>
        ) : (
          <p>Loading Superhero 1...</p>
        )}
        
        <div>
      <H3>SUPERHERO 2</H3>
      
        {randomHero2 ? (
          
            <Card>

            <h4>{randomHero2.name}</h4>
            <StyledImage src={randomHero2.images.md} alt={randomHero2.name} />
            {Object.keys(randomHero1.powerstats).map((stat)=>(
              <p key = {stat}>
                {stat} : {randomHero2.powerstats[stat]}
              </p>
            ))}
            </Card>
          
        ) : (
          <p>Loading Superhero 2...</p>
        )}
        </div>
    
      <Button onClick={generateRandomSuperheroes}>Let The Game Begin..!</Button>
      <ComparePowerstats randomHero1={randomHero1} randomHero2={randomHero2} />
      
  </div>
 );
 };
export default RandomSuperhero;
