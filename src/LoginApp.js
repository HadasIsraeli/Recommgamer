import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import App from './App';


export const LoggedInUser = React.createContext();

function LoginApp() {

    // let isLoggedIn = false;

    const adminUser = {
        name: "adminUser",
        nickname: "admin",
        id: "123456789",
        password: "Admin12345!",
        type: "manager",
        LoggedIn: "",
        gender: "female",
        age: "27"
    }

    const basicUser = {
        name: "basicUser",
        nickname: "basic",
        id: "12345",
        password: "basic12345",
        type: "basic",
        LoggedIn: "",
        gender: "male",
        age: "25"
    }

    const [user, setUser] = useState({ name: "", id: "", nickname: "", type: "", LoggedIn: false });
    const [error, SetError] = useState("");


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
            this.props.history.push('/');
            // isLoggedIn = true;
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
            // isLoggedIn = true;
            console.log('basic user Logged in!  isLoggedIn:', user.LoggedIn, user);
        }
        else {
            // isLoggedIn = false;
            console.log('Details do not match!');
            SetError('Details do not match! Please Register :) ');
        }
    }

    const Logout = () => {
        setUser({ name: "", id: "", nickname: "", type: "", LoggedIn: false });
        // this.props.history.push('/');
        // isLoggedIn = false;
        console.log("Logout", user.LoggedIn, user);
    }


    return (
        <div className="App">
            <div>
                {(user.id !== "") ? (
                    <div className="welcome">
                        <LoggedInUser.Provider value={user}>
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
                <Button className="right-navbar">
                    <NavLink to='/Register'>Register</NavLink>
                </Button>
            ) : (
                <h4> </h4>
            )}
        </div>
    );
}

export default withRouter(LoginApp);