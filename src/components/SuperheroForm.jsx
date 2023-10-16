import React, { useState } from 'react';
import Card from './Styles/Card.styles';
import Button from './Styles/Button.styles';
import FormContainer from './Styles/FormContainer.styles';
import FormLabel from './Styles/FormLabel.styles';
import StyledInput from './Styles/Input.styles';

function SuperheroForm(props) {

//define state of the form
const [newSuperhero, setNewSuperhero] = useState({
id:"",
name: "",
intelligence: "",
strength: "",
speed: "",
durability: "",
power: "",
combat: "",
images: {
  md: ""
}

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
      props.OnSuperheroSubmit(data)
     
      setNewSuperhero({

        id:"",
        name: "",
        intelligence: "",
        strength: "",
        speed: "",
        durability: "",
        power: "",
        combat: "",
        images: {
            md: ""
    }

       
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
  
  <FormLabel style = {{color: 'black'}}>
  
    Name:
    <StyledInput
      type="text"
      name="name"
      value={newSuperhero.name}
      onChange={handleInputChange}
    
    />
    
  </FormLabel>

  <FormLabel style = {{color: 'black'}}>
  Intelligence:
    <StyledInput
      type="text"
      name="intelligence"
      value={newSuperhero.intelligence}
      onChange={handleInputChange}
    />
  </FormLabel>

  <FormLabel style = {{color: 'black'}}>
  Strength:
    <StyledInput
      type="text"
      name="strength"
      value={newSuperhero.strength}
      onChange={handleInputChange}
    />
  </FormLabel>

  <FormLabel style = {{color: 'black'}}>
  Speed:
    <StyledInput
      type="text"
      name="speed"
      value={newSuperhero.speed}
      onChange={handleInputChange}
    />
  </FormLabel >

  <FormLabel style = {{color: 'black'}}>
  Durability:
    <StyledInput
      type="text"
      name="durability"
      value={newSuperhero.durability}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel style = {{color: 'black'}}>
  Power:
    <StyledInput
      type="text"
      name="power"
      value={newSuperhero.power}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel style = {{color: 'black'}}>
  combat:
    <StyledInput
      type="text"
      name="combat"
      value={newSuperhero.combat}
      onChange={handleInputChange}
    />
  </FormLabel>


  <FormLabel style = {{color: 'black'}}>
  Image Link:
    <StyledInput
      type="text"
      name="image"
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