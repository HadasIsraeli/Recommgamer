import React, { Component } from 'react';
// import User from './User';
// import AddUser from './AddUser';

import Select from 'react-select';

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


class Home extends Component {
  state = {
    // selectedOption: null,
    gameName: "",
    // id: ""
  };

  
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //   console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };
  
  handleInput = (gameName) => {
    
    this.setState({ gameName }, () =>
    console.log(`Search Input:`, this.state.gameName.target.value)
    );
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
  
   let search_game_obj = {
      // keyword: this.state.selectedOption.value,
      game_name: this.state.gameName.target.value,
      // uid:"345678912345",
    }

    console.log(search_game_obj);
    //add with write to json 
  }


  render() {
    // const { selectedOption } = this.state;

    return (
      <div className="App">
        <h2 className="headline">Search Your Next Game:</h2>
        <div className="form-search">
          <input className="input-search" type="text" id="gameName" onChange={this.handleInput} />

          {/* <Select className="select-key"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          /> */}

          <button className="submit-button" type="submit" onClick={this.handleSubmit}>Search</button>
        </div>
        <div>
          <h4 className="headline">results:</h4>
        </div>
      </div>
    );
  }
}

export default Home;
