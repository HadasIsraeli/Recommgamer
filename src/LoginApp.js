import React, { useState, useContext } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { SearchContext } from './LoggedInUser';
import db from './components/firebase'
import { collection, getDocs } from "firebase/firestore";

function LoginApp() {
    let history = useHistory();


    const [users, setUsers] = useState([]);// Puts users data in an array

    const getUsers = async () => {          // Collects the data from FireStore and triggers  SetUsers.
      const data = await getDocs(collection(db, "users"));
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const adminUser = {
        name: "adminUser",
        userName: "admin",
        id: "123456789",
        password: "Admin12345!",
        type: "manager",
        LoggedIn: false,
        gender: "female",
        age: "27"
    }

    const basicUser = {
        name: "basicUser",
        userName: "basic",
        id: "12345",
        password: "basic12345",
        type: "basic",
        LoggedIn: false,
        gender: "male",
        age: "25"
    }

    const { user, setUser } = useContext(SearchContext);
    const [error, SetError] = useState("");
    console.log('The User Is: ', user);
    getUsers();
    const Login = details => {
        console.log(details);
        users.map((users) => {
        if (details.name === users.name && details.userName === users.userName && details.password === users.password) {
            if (users.type == "admin") {
                console.log("I'm admin");
                setUser({
                    name: details.name,
                    userName: details.userName,
                    type: adminUser.type,
                    id: adminUser.id,
                    LoggedIn: true,
                    gender: adminUser.gender,
                    age: adminUser.age
                });
                console.log('Admin Logged in!  isLoggedIn:', user.LoggedIn, user);
                history.push('/WelcomePage');
            }
            else if (users.type == "basic") {
                console.log("I'm basic");
                setUser({
                    name: details.name,
                    userName: details.userName,
                    type: basicUser.type,
                    id: basicUser.id,
                    LoggedIn: true,
                    gender: basicUser.gender,
                    age: basicUser.age
                });
                console.log('basic user Logged in!  isLoggedIn:', user.LoggedIn, user);
                history.push('/WelcomePage');
            }
        }
        else {
            console.log('Details do not match!');
            SetError('Details do not match! Please Register :) ');
        }
    });
    }

    return (
        <div className="App">
            <LoginForm Login={Login} error={error} />
            <h1 className="headline">Welcome Back!</h1>
        </div>
    );
}

export default withRouter(LoginApp);