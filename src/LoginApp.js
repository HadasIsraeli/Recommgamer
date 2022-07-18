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

    // const adminUser = {
    //     name: "adminUser",
    //     userName: "admin",
    //     id: "123456789",
    //     password: "Admin12345!",
    //     type: "manager",
    //     LoggedIn: false,
    //     gender: "female",
    //     age: "27"
    // }

    // const basicUser = {
    //     name: "basicUser",
    //     userName: "basic",
    //     id: "12345",
    //     password: "basic12345",
    //     type: "basic",
    //     LoggedIn: false,
    //     gender: "male",
    //     age: "25"
    // }

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
            // if ((details.name === user.name) && (details.userName === user.userName) && (details.password === user.password) && (!user_match)) {
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
                // if (user.type == "admin") {
                //     console.log("I'm admin");
                //     setUser({
                //         name: details.name,
                //         userName: details.userName,
                //         type: adminUser.type,
                //         id: adminUser.id,
                //         LoggedIn: true,
                //         gender: adminUser.gender,
                //         age: adminUser.age
                //     });
                //     console.log('Admin Logged in!  isLoggedIn:', user.LoggedIn, user);
                //     history.push('/WelcomePage');
                // }
                // else if (user.type == "basic") {
                //     console.log("I'm basic");
                //     setUser({
                //         name: details.name,
                //         userName: details.userName,
                //         type: basicUser.type,
                //         id: basicUser.id,
                //         LoggedIn: true,
                //         gender: basicUser.gender,
                //         age: basicUser.age
                //     });
                //     console.log('basic user Logged in!  isLoggedIn:', user.LoggedIn, user);
                //     history.push('/WelcomePage');
                // }
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