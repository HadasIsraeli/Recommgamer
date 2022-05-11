import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import { withRouter } from "react-router-dom";

const Navbar = () => {
   
    return (
        <nav className="nav-wrapper blue darken-3">
            <div className="navbar-container">
                <Link className="brand-logo" to="/">Game Searcher</Link>
                <div className="right-navbar">
                    <NavLink to='/Home'>Home</NavLink>
                    <NavLink to='/UsersPage'>Users</NavLink>
                    <NavLink to='/Register'>Register</NavLink>
                    <NavLink to='/Login'>Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);
