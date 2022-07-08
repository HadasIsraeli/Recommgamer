import React, { useState, useContext } from 'react';
import LoginForm from './components/LoginForm';
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { SearchContext } from './LoggedInUser';

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

    const { user, setUser } = useContext(SearchContext);
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
            history.push('/WelcomePage');
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
            history.push('/WelcomePage');
        }
        else {
            console.log('Details do not match!');
            SetError('Details do not match! Please Register :) ');
        }
    }

    return (
        <div className="App">
            <LoginForm Login={Login} error={error} />
            <h1 className="headline">Welcome Back!</h1>
        </div>
    );
}

export default withRouter(LoginApp);