import React, {useState} from 'react';
import User from './User';
import db from './firebase';
import {
  collection,
  getDocs,
} from "firebase/firestore";

function UsersPage () {


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
        <h2>Users list:</h2>
        {users.map((user) => { //Goes over all the users collected from FireStore and prints to screen the data.
        return (
          <div>
            {" "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
          </div>
        )})}:
        {/* <User deleteUser={this.deleteUser} users={this.state.users} /> */}
      </div>
    );
  }


export default UsersPage;