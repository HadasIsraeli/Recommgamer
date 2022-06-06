import React, { Component } from 'react';
// import User from './User';
// import AddUser from './AddUser';

import Select from 'react-select';

const options = [
  { value: 'Indie', label: 'Indie' },
  { value: 'Action', label: 'Action' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Casual', label: 'Casual' },
  { value: 'Simulation', label: 'Simulation' },
  { value: 'RPG', label: 'RPG' },
  { value: 'Strategy', label: 'Strategy' },
  { value: 'Atmospheric', label: 'Atmospheric' },
  { value: 'Early Access', label: 'Early Access' },
  { value: 'Free to Play', label: 'Free to Play' },
];


class Home extends Component {
  state = {
    selectedOption: null,
    gameName: "",
    // users: [
    //   {
    //     name: 'Hadas', age: 26, gender: 'blue', id: 1, password: null, mail: null
    //   },
    //   {
    //     name: 'Inbar', age: 27, gender: 'pink', id: 2, password: null, mail: null
    //   },
    //   {
    //     name: 'Grisha', age: 29, gender: 'RED', id: 3, password: null, mail: null
    //   }
    // ]
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };


  handleInput = (gameName) => {

    this.setState({ gameName }, () =>
      console.log(`Option selected:`, this.state.gameName.target.value)
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    //add with write to json 
  }

  // addUser = (user) => {
  //   // console.log(user);
  //   user.id = Math.random();
  //   let users = [...this.state.users, user];
  //   this.setState({
  //     users: users
  //   })
  // }

  // deleteUser = (id) => {
  //   //delete from JSON
  //   //console.log(id);
  //   let users = this.state.users.filter(user => {
  //     return user.id !== id
  //   });
  //   this.setState({
  //     users: users
  //   })
  // }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App">
        <h2>Search Your Next Game:</h2>
        {/* <User deleteUser={this.deleteUser} users={this.state.users} /> */}

        {/* <AddUser addUser={this.addUser} /> */}
        <div className="form-group">
          <input type="text" id="gameName" onChange={this.handleInput} />

          <Select className="select-key"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />

          <button className="submit-button">Submit</button>
        </div>
      </div>
    );
  }
}

export default Home;
