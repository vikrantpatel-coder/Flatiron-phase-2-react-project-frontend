import React from 'react';
import Card from './Card.styles';

function About() {
  return (
    <div>
      <Card>
      <h2>About Page</h2>
      <p>Project SuperHERO</p>
      <p>This project is inspired by my childhood memories. Back then we did not have much access to
        technology like the current generation does. We would play many board games and card games.
        Superhero, pokémon, and wrestling card games were some of my favorites. This project reflects the same idea of
        playing cards where you shuffle, deploy, and compare the power and most powerful character wins.
      </p>
            <img src="https://e0.pxfuel.com/wallpapers/796/732/desktop-wallpaper-avengers-vs-justice-league-which-superhero-team-will-win-the-fight-avengers-vs-justice-league-marvel-vs-marvel-vs-dc.jpg" alt="Superhero Battle" />
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