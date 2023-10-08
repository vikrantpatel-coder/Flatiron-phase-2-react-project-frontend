import React, { useState } from 'react';
import Card from './Styles/Card.styles';
import Button from './Styles/Button.styles';
import FormContainer from './Styles/FormContainer.styles';
import FormLabel from './Styles/FormLabel.styles';
import StyledInput from './Styles/Input.styles';

function SuperheroForm(props) {

//define state of the form
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

//Form updates with the new superhero by defining spread operator
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setNewSuperhero({
    ...newSuperhero,
    [name]: value,
  });
};


//form submittion request when user will click the button
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
     
      //reset the form with empty values
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
      console.error('error', error);
    });
};

return (
  <div>
    <Card>
  <h2>Request Your Superhero Below :</h2>
       
<FormContainer onSubmit={handleSubmit}>
  
  <FormLabel>
  
    Name:
    <StyledInput
      type="text"
      name="name"
      value={newSuperhero.name}
      onChange={handleInputChange}
    
    />
    
  </FormLabel>

  <FormLabel>
  Intelligence:
    <StyledInput
      type="text"
      intelligence="intelligence"
      value={newSuperhero.intelligence}
      onChange={handleInputChange}
    />
  </FormLabel>

  <FormLabel>
  Strength:
    <StyledInput
      type="text"
      strength="strength"
      value={newSuperhero.strength}
      onChange={handleInputChange}
    />
  </FormLabel>

  <FormLabel>
  Speed:
    <StyledInput
      type="text"
      speed="speed"
      value={newSuperhero.speed}
      onChange={handleInputChange}
    />
  </FormLabel>

  <FormLabel>
  Durability:
    <StyledInput
      type="text"
      durability="durability"
      value={newSuperhero.durability}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel>
  Power:
    <StyledInput
      type="text"
      power="power"
      value={newSuperhero.power}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel>
  combat:
    <StyledInput
      type="text"
      combat="combat"
      value={newSuperhero.combat}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel>
  Image Link:
    <StyledInput
      type="text"
      combat="image"
      value={newSuperhero.images.md}
      onChange={handleInputChange}
    />
  </FormLabel>


  <Button type="submit">Create Superhero</Button>
</FormContainer>
</Card>
</div>

)
}

export default SuperheroForm