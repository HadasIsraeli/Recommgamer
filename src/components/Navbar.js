import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { LoggedInUser } from '../LoginApp'

function Navbar() {

    const user = useContext(LoggedInUser);
    let user_type = user.type;
    console.log('The User Is: ', user_type);

    if (user_type === 'manager') {
        // console.log('The User Is: ', user_type);
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/">Game Searcher</Link>
                    <div className="right-navbar">
                        {/* <NavLink to='/Home'>Search Game</NavLink> */}
                        <NavLink to='/UsersPage'>Users</NavLink>
                        {/* <NavLink to='/Register'>Register</NavLink>
                        <NavLink to='/Login'>Login</NavLink> */}
                    </div>
                </div>
            </nav>
        )
    }
    if (user_type === 'basic') {
        console.log('The User Is: ', user_type);
        return (
            <nav className="nav-wrapper blue darken-3">
                <div className="navbar-container">
                    <Link className="brand-logo" to="/">Game Searcher</Link>
                    <div className="right-navbar">
                        <NavLink to='/Home'>Search Game</NavLink>
                        {/* <NavLink to='/UsersPage'>Users</NavLink> */}
                        {/* <NavLink to='/Register'>Register</NavLink>
                        <NavLink to='/Login'>Login</NavLink> */}
                    </div>
                </div>
            </nav>
        )
    }
    // return (
    //     <nav className="nav-wrapper blue darken-3">
    //         <div className="navbar-container">
    //             <Link className="brand-logo" to="/">Game Searcher</Link>
    //             <div className="right-navbar">
    //                 <NavLink to='/Home'>Search Game</NavLink>
    //                 <NavLink to='/UsersPage'>Users</NavLink>
    //                 <NavLink to='/Register'>Register</NavLink>
    //                 <NavLink to='/Login'>Login</NavLink>
    //             </div>
    //         </div>
    //     </nav>
    // )
}

export default withRouter(Navbar);
