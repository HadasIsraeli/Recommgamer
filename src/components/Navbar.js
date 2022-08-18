import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter, useHistory } from "react-router-dom";
import { LoggedContext } from '../LoggedInUser';

function Navbar() {
    const { user, setUser } = useContext(LoggedContext);
    let user_type = user.type;
    let logged_in = user.LoggedIn;

    let history = useHistory();

    const Logout = () => {      //set global user details to first state and logout
        setUser({
            name: "",
            id: "",
            userName: "",
            type: "",
            LoggedIn: false,
            gender: '',
            age: ""
        });
        history.push('/'); //sends the user to login page
    }

    if ((user_type === "admin") && (logged_in === true)) {  //dispalying navigation bar to admin type user
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/WelcomePage">RecommGamer</Link>
                    <div className="right-navbar">
                        <NavLink to='/UsersPage'>Users</NavLink>
                        <button className="logout-button" onClick={Logout}>
                            Logout
                            <img src='https://cdn-icons-png.flaticon.com/512/56/56805.png' />
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
    if ((user_type === 'basic') && (logged_in === true)) {      //dispalying navigation bar to basic type user
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/WelcomePage">RecommGamer</Link>
                    <div className="right-navbar">
                        <NavLink to='/SearchPage'>Search Game</NavLink>
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                </div>
            </nav>
        )
    }
    else {      //dispalying navigation bar a user that is not logged in or registered
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <div className="right-navbar">
                        <NavLink to='/Register'>Register</NavLink>
                        <NavLink to='/'>Login</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);