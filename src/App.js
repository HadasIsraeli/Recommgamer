import React, { Component } from 'react';
import User from './User';
import AddUser from './AddUser';
class App extends Component {
  state = {
    users: [
      { name: 'Hadas', age: 25, color: 'blue', id: 1 },
      { name: 'Inbar', age: 26, color: 'pink', id: 2 },
      { name: 'Grisha', age: 28, color: 'RED', id: 3 }
    ]
  }
  addUser = (user) => {
    // console.log(user);
    user.id = Math.random();
    let users = [...this.state.users, user];
    this.setState({
      users: users
    })
  }

  deleteUser = (id) => {
    //console.log(id);
    let users = this.state.users.filter(user => {
      return user.id !== id 
    });
    this.setState({
      users:users
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First react app!!</h1>
        <p>Hi! How are ya?!?!!</p>
        <User deleteUser={this.deleteUser} users={this.state.users} />
        {/* <User users={this.state.users} /> */}
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}

export default App;
