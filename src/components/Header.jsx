import React, {useState} from "react"


const Header = ({ onPublisherChange }) => {

  const [selectedPublisher, setSelectedPublisher] = useState("");

  const handlePublisherChange = (event) => {
  
    const publisher = event.target.value;
    setSelectedPublisher(publisher);
    onPublisherChange(publisher);
   
  }

    return (
        <>
        <div className="header">
            <label htmlFor="publisher">Select a Publisher:</label>
            <select id="publisher" value={selectedPublisher} onChange={handlePublisherChange} >
                <option value = "">All</option>
                <option value = "Marvel Comics">Marvel Comics</option>
                <option value = "DC Comics">DC Comics</option>
                <option value = "Dark Horse Comics">Dark Horse Comics</option>
                <option value = "Archangel">Archangel</option>
                <option value = "Tempest">Tempest</option>
                <option value = "Giant-Man">Giant-Man</option>
                <option value = "Toxin">Toxin</option>
                <option value = "Angel">Angel</option>
                <option value = "Goliath">Goliath</option>
            </select>
            <h1>SuperHERO BattleGround</h1>
            <h2>Superhero Vs Superhero</h2>
            <h3>Superhero 1</h3>
        </div>
        </>
    )
} 

export default Header