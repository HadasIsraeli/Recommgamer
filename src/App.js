import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import UsersPage from './components/UsersPage';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route>
          <Route exact path='/' component={WelcomePage} />
            <Route exact path='/UsersPage' component={UsersPage} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/Register' component={Register} />
            <Route path='/Login' component={LoginForm} />
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import User from './components/User';
// import AddUser from './components/AddUser';
// class App extends Component {
//   state = {
//     users: [
//       {
//         name: 'Hadas', age: 26, gender: 'blue', id: 1, password: null, mail: null
//       },
//       {
//         name: 'Inbar', age: 27, gender: 'pink', id: 2, password: null, mail: null
//       },
//       {
//         name: 'Grisha', age: 29, gender: 'RED', id: 3, password: null, mail: null
//       }
//     ]
//   }
//   addUser = (user) => {
//     // console.log(user);
//     user.id = Math.random();
//     let users = [...this.state.users, user];
//     this.setState({
//       users: users
//     })
//   }

//   deleteUser = (id) => {
//     //console.log(id);
//     let users = this.state.users.filter(user => {
//       return user.id !== id
//     });
//     this.setState({
//       users: users
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React App</h1>
//         <User deleteUser={this.deleteUser} users={this.state.users} />
//         {/* <User users={this.state.users} /> */}
//         <AddUser addUser={this.addUser} />
//       </div>
//     );
//   }
// }

// export default App;


