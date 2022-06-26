import React, { useState, useMemo } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { LoggedInUser } from './LoggedInUser';

import App from './App';

function LoginApp() {
    let history = useHistory();

    const adminUser = {
        name: "adminUser",
        nickname: "admin",
        id: "123456789",
        password: "Admin12345!",
        type: "manager",
        LoggedIn: false,
        gender: "female",
        age: "27"
    }

    const basicUser = {
        name: "basicUser",
        nickname: "basic",
        id: "12345",
        password: "basic12345",
        type: "basic",
        LoggedIn: false,
        gender: "male",
        age: "25"
    }

    const [user, setUser] = useState({
        name: "",
        id: "",
        nickname: "",
        type: "",
        LoggedIn: false,
        gender: '',
        age: ""
    });
    const [error, SetError] = useState("");
    console.log('The User Is: ', user);

    const Login = details => {
        console.log(details);

        if (details.name === adminUser.name && details.nickname === adminUser.nickname && details.password === adminUser.password) {
            setUser({
                name: details.name,
                nickname: details.nickname,
                type: adminUser.type,
                id: adminUser.id,
                LoggedIn: true,
                gender: adminUser.gender,
                age: adminUser.age
            });
            console.log('Admin Logged in!  isLoggedIn:', user.LoggedIn, user);
        }
        if (details.name === basicUser.name && details.nickname === basicUser.nickname && details.password === basicUser.password) {
            setUser({
                name: details.name,
                nickname: details.nickname,
                type: basicUser.type,
                id: basicUser.id,
                LoggedIn: true,
                gender: basicUser.gender,
                age: basicUser.age
            });
            console.log('basic user Logged in!  isLoggedIn:', user.LoggedIn, user);
        }
        else {
            console.log('Details do not match!');
            SetError('Details do not match! Please Register :) ');
        }
    }

    const Logout = () => {
        setUser({
            name: "",
            id: "",
            nickname: "",
            type: "",
            LoggedIn: false,
            gender: '',
            age: ""
        });
        history.push('/');
        console.log("Logout", user.LoggedIn, user);
    }

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <div className="App">
            <div>
                {(user.id !== "") ? (
                    <div className="welcome">
                        <LoggedInUser.Provider value={value}>
                            <App />
                        </LoggedInUser.Provider>
                        <br />
                        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                ) : (
                    <LoginForm Login={Login} error={error} />
                )}
            </div>
            {(!user.LoggedIn) ? (
                <div>
                    <h1 className="headline">Welcome Back!</h1>
                    <Button className="right-navbar">
                        <NavLink to='/Register'>Register</NavLink>
                    </Button>
                </div>
            ) : (
                <h4> </h4>
            )}
        </div>
    );
}

export default withRouter(LoginApp);