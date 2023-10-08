import React from 'react';
import Card from './Styles/Card.styles';
import StyledImage from './Styles/Image.styles';

function About() {
  return (
    <div>
      <Card>
      <h2>About</h2>
      <h3>Project SuperHERO</h3>
      <p>This project is inspired by my childhood memories. Back then we did not have much access to
        technology like the current generation does. We would play many board games and card games.
        Superhero, pokémon, and wrestling card games were some of my favorites. This project reflects the same idea of
        playing cards where you shuffle, deploy, and compare the power and most powerful character wins.
      </p>
            <StyledImage src="https://e0.pxfuel.com/wallpapers/796/732/desktop-wallpaper-avengers-vs-justice-league-which-superhero-team-will-win-the-fight-avengers-vs-justice-league-marvel-vs-marvel-vs-dc.jpg" alt="Superhero Battle" />
            <div>
                <h3>Links</h3>
                <a href="vikrantpatel-coder/Flatiron-phase-2-react-project-frontend">GitHub</a>
                <a href="https://www.linkedin.com/in/vikrant-patel/">LinkedIn</a>
            </div>
            </Card>
    </div>
  );
}

export default About;