import React, { useState } from 'react';
// import User from './User';
// import AddUser from './AddUser';

// import Select from 'react-select';

// const options = [
//   { value: 'Indie', label: 'Indie' },
//   { value: 'Action', label: 'Action' },
//   { value: 'Adventure', label: 'Adventure' },
//   { value: 'Casual', label: 'Casual' },
//   { value: 'Simulation', label: 'Simulation' },
//   { value: 'RPG', label: 'RPG' },
//   { value: 'Strategy', label: 'Strategy' },
//   { value: 'Atmospheric', label: 'Atmospheric' },
//   { value: 'Early Access', label: 'Early Access' },
//   { value: 'Free to Play', label: 'Free to Play' },
// ];


function Home() {
  const state = {
    // selectedOption: null,
    gameName: "",
    // id: ""
  };

  const [game_name, setName] = useState(document.getElementById('gameName').value);
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //   console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };

  const handleInput = (gameName) => {

    this.setState({ gameName }, () =>
      console.log(`Search Input:`, state.gameName.target.value)
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setName(document.getElementById('gameName').value);

    let search_game_obj = {
      // keyword: this.state.selectedOption.value,
      game_name: this.state.gameName.target.value,
      // uid:"345678912345",
    }

    document.getElementById('gameName').value = '';
    console.log('gameName', search_game_obj.game_name, game_name);
    //add with write to json 
  }


  // render() {
  // const { selectedOption } = this.state;

  return (
    <div className="App">
      <h2 className="headline">Search Your Next Game:</h2>
      <div className="form-search">
        <input className="input-search" type="text" placeholder="Enter Game Name" id="gameName" onChange={handleInput} />

        {/* <Select className="select-key"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          /> */}

        <button className="submit-button" type="submit" onClick={handleSubmit}>Search</button>
      </div>
      <div>
        <h4 className="headline">Search Results For : {game_name} </h4>
      </div>
    </div>
  );
  // }
}

export default Home;