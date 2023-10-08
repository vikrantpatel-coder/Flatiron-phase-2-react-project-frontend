import React from "react";
import Div from "./Styles/WinnerText.styles";


const ComparePowerstats = ({ randomHero1, randomHero2 }) => {
  const comparePowerstats = () => {
    if (!randomHero1 || !randomHero2) {
      return "Select two superheroes to compare.";
    }
    
    const stats1 = randomHero1.powerstats;
    const stats2 = randomHero2.powerstats;

    //calculates the total sum of all numeric values
    const totalDifference1 = Object.values(stats1).reduce((sum, value) => sum + parseInt(value), 0);
    const totalDifference2 = Object.values(stats2).reduce((sum, value) => sum + parseInt(value), 0);

    if (totalDifference1 > totalDifference2) {
      return `${randomHero1.name} WINS!`;
    } else if (totalDifference2 > totalDifference1) {
      return `${randomHero2.name} WINS!`;
    } else {
      return "It's a tie!";
    }
  };

  return (
    <Div>
      <div>{comparePowerstats()}</div>
    </Div>
  );
};

export default ComparePowerstats;
