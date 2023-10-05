import React from "react";

const ComparePowerstats = ({ randomHero1, randomHero2 }) => {
  const comparePowerstats = () => {
    if (!randomHero1 || !randomHero2) {
      return "Select two superheroes to compare.";
    }
    
    const stats1 = randomHero1.powerstats;
    const stats2 = randomHero2.powerstats;

    const totalDifference1 = Object.values(stats1).reduce((sum, value) => sum + parseInt(value), 0);
    const totalDifference2 = Object.values(stats2).reduce((sum, value) => sum + parseInt(value), 0);

    if (totalDifference1 > totalDifference2) {
      return `WINNER! : ${randomHero1.name}`;
    } else if (totalDifference2 > totalDifference1) {
      return `WINNER! : ${randomHero2.name}`;
    } else {
      return "It's a tie!";
    }
  };

  return (
    <div>
      <div>{comparePowerstats()}</div>
    </div>
  );
};

export default ComparePowerstats;
