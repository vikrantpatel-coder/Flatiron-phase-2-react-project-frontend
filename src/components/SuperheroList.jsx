import React from "react";

const SuperheroList = ({superheroes}) => {

    return(
        <div>
    <ul>
    {superheroes.map((superhero) => (
          <li key={superhero.id}>
            <h3>{superhero.name}</h3>
            <img src={superhero.images.md} alt={superhero.name} />
            <p>Intelligence: {superhero.powerstats.intelligence}</p>
            <p>Strength: {superhero.powerstats.strength}</p>
            <p>Speed: {superhero.powerstats.speed}</p>
            <p>Durability: {superhero.powerstats.durability}</p>
            <p>Power: {superhero.powerstats.power}</p>
            <p>Combat: {superhero.powerstats.combat}</p>
          </li>
        ))}
    </ul>
  </div>
);
};

    

export default SuperheroList