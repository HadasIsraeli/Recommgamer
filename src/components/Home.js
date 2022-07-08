import React, { useState } from 'react';

function Home() {
  
  const [state, setState] = useState("");

  const [game_name, setName] = useState("");
 
  const handleInput = (gameName) => {
    setState(gameName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(document.getElementById('gameName').value);

    let search_game_obj = {
      // keyword: this.state.selectedOption.value,
      game_name: state
      // uid:"345678912345",
    }

    document.getElementById('gameName').value = '';
    console.log('gameName', search_game_obj.game_name, game_name);
    //add with write to json 
  }

  return (
    <div className="App">
      <h2 className="headline">Search Your Next Game:</h2>
      <div className="form-search">
        <input className="input-search" type="text" placeholder="Enter Game Name" id="gameName" onChange={handleInput} />
        <button className="submit-button" type="submit" onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <h4 className="headline">Search Results For : {game_name} </h4>
      </div>
    </div>
  );
}

export default Home;