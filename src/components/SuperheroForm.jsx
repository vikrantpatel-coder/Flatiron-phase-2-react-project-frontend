import React, { useState } from 'react';

function SuperheroForm(props) {
const [newSuperhero, setNewSuperhero] = useState({
  name: "",
  intelligence: "",
  strength: "",
  speed: "",
  durability: "",
  power: "",
  combat: "",
  images: "",
});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNewSuperhero({
    ...newSuperhero,
    [name]: value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  fetch('http://localhost:3000/superheroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newSuperhero),
  })
    .then((response) => response.json())
    .then((data) => {
     
      props.OnSuperheroSubmit(newSuperhero)
     
      setNewSuperhero({
        name: "",
        intelligence: "",
        strength: "",
        speed: "",
        durability: "",
        power: "",
        combat: "",
        images: "",
      });
    })
    .catch((error) => {
      console.error('Error creating superhero:', error);
    });
};

return (
  <div>
  <h2>Request Your Superhero Below :</h2>
       
<form onSubmit={handleSubmit}>
  <label>
    Name:
    <input
      type="text"
      name="name"
      value={newSuperhero.name}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Intelligence:
    <input
      type="text"
      intelligence="intelligence"
      value={newSuperhero.intelligence}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Strength:
    <input
      type="text"
      strength="strength"
      value={newSuperhero.strength}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Speed:
    <input
      type="text"
      speed="speed"
      value={newSuperhero.speed}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Durability:
    <input
      type="text"
      durability="durability"
      value={newSuperhero.durability}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Power:
    <input
      type="text"
      power="power"
      value={newSuperhero.power}
      onChange={handleInputChange}
    />
  </label>
  <label>
  combat:
    <input
      type="text"
      combat="combat"
      value={newSuperhero.combat}
      onChange={handleInputChange}
    />
  </label>
  <label>
  Image Link:
    <input
      type="text"
      combat="image"
      value={newSuperhero.images.md}
      onChange={handleInputChange}
    />
  </label>
  <button type="submit">Create Superhero</button>
</form>
</div>

)
}

export default SuperheroForm