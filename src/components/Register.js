import React, { useState, useContext } from 'react';
import { LoggedInUser } from '../LoginApp';
import AddUser from './AddUser';


function Register() {

    const logged_user = useContext(LoggedInUser);
    console.log('The User Is: ', logged_user);

    const state = {
        users: [
            {
                name: 'Hadas', nickname: 'Dusa', age: 26, gender: 'blue', id: 1, password: null, mail: null, LoggedIn: false
            },
            {
                name: 'Inbar', nickname: 'Bari', age: 27, gender: 'pink', id: 2, password: null, mail: null, LoggedIn: false
            },
            {
                name: 'Grisha', nickname: 'Greg', age: 29, gender: 'RED', id: 3, password: null, mail: null, LoggedIn: false
            }
        ]
    };

    const [users_list, setState] = useState({ users: [] });

    const addUser = (user) => {
        console.log(user);
        user.id = Math.random();
        user.type = 'basic';
        user.LoggedIn = true;
        let users = [...state.users, user];
        setState({
            users: users
        });
        console.log('users list: ',users_list);
        //add with write to json 
    }


    return (
        <div className="App">
            <AddUser addUser={addUser} />
        </div>
    );
}


export default Register;
