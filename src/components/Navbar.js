import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter, useHistory } from "react-router-dom";
import { SearchContext } from '../LoggedInUser';

function Navbar() {

    const { user, setUser } = useContext(SearchContext);
    let user_type = user.type;
    let logged_in = user.LoggedIn;
    console.log('The User Is: ', user_type, user);

    let history = useHistory();

    const Logout = () => {
        setUser({
            name: "",
            id: "",
            userName: "",
            type: "",
            LoggedIn: false,
            gender: '',
            age: ""
        });
        history.push('/');
        console.log("Logout", user.LoggedIn, user);
    }

    if ((user_type === 'manager') && (logged_in === true)) {
        // console.log('The User Is: ', user_type);
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/WelcomePage">Game Searcher</Link>
                    <div className="right-navbar">
                        <NavLink to='/UsersPage'>Users</NavLink>
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                </div>
            </nav>
        )
    }
    if ((user_type === 'basic') && (logged_in === true)) {
        // console.log('The User Is: ', user_type);
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/WelcomePage">Game Searcher</Link>
                    <div className="right-navbar">
                        <NavLink to='/Home'>Search Game</NavLink>
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                </div>
            </nav>
        )
    }
    else {
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