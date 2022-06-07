import React, { Component } from 'react';
import controller from '../assets/controller.png';

class WelcomePage extends Component {
  
  render() {

    return (
      <div className="App">
        <h1 className="headline">Welcome to Game Searcher!</h1>
        <div className="welcome-game"><img src={controller} alt="computer-game" className="welcome-img" /></div>
      </div>
    );
  }
}

export default WelcomePage;
