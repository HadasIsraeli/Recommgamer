import React, { useState, useContext } from 'react';
import { SearchContext } from '../LoggedInUser';
import AddUser from './AddUser';
import { useHistory } from 'react-router-dom';
import db from './firebase';
import {
    collection,
    // getDocs,
    addDoc,
    // updateDoc,
    // deleteDoc,
    // doc,
} from "firebase/firestore";

function Register() {
    let history = useHistory();
    const { user, setUser } = useContext(SearchContext);

    const [error, SetError] = useState("");
    // SetError('Details do not match! Please Register :) ');



    // const state = {
    //     users: [
    //         {
    //             name: 'Hadas', userName: 'Dusa', age: 26, gender: 'blue', id: 1, password: null, mail: null, LoggedIn: false
    //         },
    //         {
    //             name: 'Inbar', userName: 'Bari', age: 27, gender: 'pink', id: 2, password: null, mail: null, LoggedIn: false
    //         },
    //         {
    //             name: 'Grisha', userName: 'Greg', age: 29, gender: 'RED', id: 3, password: null, mail: null, LoggedIn: false
    //         }
    //     ]
    // };

    // const [users_list, setState] = useState({ users: state.users });

    const usersCollectionRef = collection(db, "users");

    const addUser = (new_user) => {
        
        console.log(new_user);
        new_user.id = Math.random();
        new_user.type = 'basic';
        new_user.LoggedIn = true;

        // let users = [...state.users, new_user];
        // setState({
        //     users: users
        // });

        setUser(new_user);
        // console.log('users list: ', new_user, users_list);

        addDoc(usersCollectionRef, {
            name: new_user.name,
            id: new_user.id,
            userName: new_user.userName,
            type: new_user.type,
            gender: new_user.gender,
            age: new_user.age,
            password: new_user.password,
            mail: new_user.mail,
        });







        history.push('/WelcomePage');

    }


    // console.log('The User Is: ', user, users_list);
    console.log('The User Is: ', user);


    return (
        <div className="App">
            <h1 className="headline">Hello New Friend!</h1>
            <AddUser addUser={addUser} />
        </div>
    );
}

export default Register;