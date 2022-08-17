import React, { useState } from 'react';
import db from './firebase';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

function UsersPage() {

  const [users, setUsers] = useState([]);// Puts users data in an array

  const getUsers = async () => {          // Collects the data from FireStore and triggers  SetUsers.
    const data = await getDocs(collection(db, "users"));
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  if (users.length < 1) {
    getUsers();//call the getUsers method and trigger the collect data from FireStore.
  }

  const deleteUser = (delete_user) => {
    let users_list = users.filter(user => {
      return user.id !== delete_user.id
    });
    setUsers(users_list);

    //delete user from firebase by the delete_user.id
    deleteDoc(doc(db, "users", delete_user.id)); 
  }

  return (
    <div className="App">
      <h1 className="headline"> Users list:</h1>
      <div className="user-list">
        {users.map((user) => { //Goes over all the users collected from FireStore and prints to screen the data.
          return (

            <div className="user">
              {/* {" "} */}
              <h2>{user.userName} </h2>
              <div>Name: {user.name}</div>
              <div>Age: {user.age} </div>
              <div>Gender: {user.gender} </div>
              <div>Mail: {user.mail} </div>
              <button onClick={() => { deleteUser(user) }}>Delete User</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default UsersPage;