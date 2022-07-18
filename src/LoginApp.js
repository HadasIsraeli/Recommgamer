import React, { useState, useContext } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { SearchContext } from './LoggedInUser';
import db from './components/firebase'
import { collection, getDocs } from "firebase/firestore";

function LoginApp() {
    let history = useHistory();

    let user_match = false;
    const [users, setUsers] = useState([]);// Puts users data in an array

    const getUsers = async () => {          // Collects the data from FireStore and triggers  SetUsers.
        const data = await getDocs(collection(db, "users"));
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }


    const { user, setUser } = useContext(SearchContext);
    const [error, SetError] = useState("");

    if (users.length < 1) {
        console.log('users0', users);
        getUsers();
    }
    else {
        console.log('users1', users);
    }

    const Login = details => {
        console.log(details);
        users.map((user, index) => {
            if ((details.userName === user.userName) && (details.password === user.password) && (!user_match)) {
                console.log('user index', index);

                console.log("I'm ", user.type);
                setUser({
                    name: user.name,
                    userName: user.userName,
                    type: user.type,
                    id: user.id,
                    LoggedIn: true,
                    gender: user.gender,
                    age: user.age,
                    mail: user.mail
                });
                user_match = true;
                console.log('Logged in!  isLoggedIn:', user.LoggedIn, user, ' user_match:', user_match);
                history.push('/WelcomePage');
                return;
            }
            else {
                if ((index == users.length - 1) && (user_match == false)) {
                    console.log('Details do not match!');
                    SetError('Details do not match! Please Register :) ');
                }
            }
        });
    }

    console.log('The User Is: ', user);

    return (
        <div className="App">
            <LoginForm Login={Login} error={error} />
            <h1 className="headline">Welcome Back!</h1>
        </div>
    );
}

export default withRouter(LoginApp);