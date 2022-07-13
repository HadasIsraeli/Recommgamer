import React, { useState } from 'react';
import User from './User';
// class UsersPage extends Component {
  // state = {
  //   users: [
  //     {
  //       name: 'Hadas', age: 26, gender: 'blue', id: 1, password: null, mail: null
  //     },
  //     {
  //       name: 'Inbar', age: 27, gender: 'pink', id: 2, password: null, mail: null
  //     },
  //     {
  //       name: 'Grisha', age: 29, gender: 'RED', id: 3, password: null, mail: null
  //     }
  //   ]
import db from './firebase';
import {
  collection,
  getDocs,
} from "firebase/firestore";

function UsersPage() {

  const [users, setUsers] = useState([]);// Puts users data in an array

  const getUsers = async () => {          // Collects the data from FireStore and triggers  SetUsers.
    const data = await getDocs(collection(db, "users"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }


  const deleteUser = (id) => {
    //console.log(id);
    let users = this.state.users.filter(user => {
      return user.id !== id
    });
    this.setState({
      users: users
    })
  }
  getUsers(); //call the getUsers method and trigger the collect data from FireStore.

  return (
    <div className="App">
      <h1> Users list:</h1>
      <div className="user-list">
        {users.map((user) => { //Goes over all the users collected from FireStore and prints to screen the data.
          return (

            <div className="user">
              {/* {" "} */}
              <h2>Name: {user.name}</h2>
              <div>Nickname: {user.nickname} </div>
              <div>Age: {user.age} </div>
              <div>Gender: {user.gender} </div>
              <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
            </div>
          )
        })}
        </div>
      {/* <User deleteUser={this.deleteUser} users={this.state.users} /> */}
    </div>
  );
}


export default UsersPage;