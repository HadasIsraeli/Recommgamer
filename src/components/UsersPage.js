import React, { Component } from 'react';
import User from './User';
class UsersPage extends Component {
  state = {
    users: [
      {
        name: 'Hadas', age: 26, gender: 'blue', id: 1, password: null, mail: null
      },
      {
        name: 'Inbar', age: 27, gender: 'pink', id: 2, password: null, mail: null
      },
      {
        name: 'Grisha', age: 29, gender: 'RED', id: 3, password: null, mail: null
      }
    ]
  }

  deleteUser = (id) => {
    //console.log(id);
    let users = this.state.users.filter(user => {
      return user.id !== id
    });
    this.setState({
      users: users
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Users list:</h2>
        <User deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default UsersPage;
