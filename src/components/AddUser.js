import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import joystick from '../assets/computer-game.png';

import App from '../App';

function AddUser({ addUser }) {

    const [state, setState]  = useState({
        name: "",
        age: "",
        gender: "",
        password: "",
        mail: "",
        nicname: "",
        LoggedIn: false,
        // type:'basic'
    })
    // const handleChange = (e) => {
    //     setState({
    //         [e.target.id]: e.target.value
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        addUser(state);
    }

    // Logout = () => {
    //     this.state = {
    //         name: null,
    //         age: null,
    //         gender: null,
    //         password: null,
    //         mail: null,
    //         nicname: null,
    //         LoggedIn: false,
    //         // type:'basic'
    //     }
    //     this.setState({
    //         name: null,
    //         age: null,
    //         gender: null,
    //         password: null,
    //         mail: null,
    //         nicname: null,
    //         LoggedIn: false,
    //     });
    //     // this.props.history.push('/');
    //     // isLoggedIn = false;
    // }


    return (
        <div>
            <h1 className="headline">Hello New Friend!</h1>
            {(!state.LoggedIn) ? (
                <div className="welcome">
                    <Button className="right-navbar">
                        <NavLink to='/'>Login</NavLink>
                    </Button>
                </div>
            ) : (
                <div className="welcome">
                    <App />

                    <button className="logout-button">Logout</button>
                </div>
            )}
            <div className="form-inner">
                <form onSubmit={handleSubmit} className="form-register">
                    <h2 className="form-title">Register:</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setState({ ...state, name: e.target.value })} value={state.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">NicName:</label>
                        <input type="text" name="nickname" id="nicname" onChange={e => setState({ ...state, nicname: e.target.value })} value={state.nicname} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" id="age" onChange={e => setState({ ...state, age: e.target.value })} value={state.age} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" name="gender" id="gender" onChange={e => setState({ ...state, gender: e.target.value })} value={state.gender} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Mail:</label>
                        <input type="text" name="mail" id="mail" onChange={e => setState({ ...state, mail: e.target.value })} value={state.mail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password" onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />
                    </div>
                    <button className="submit-button" type="submit" value="SIGNIN">Submit</button>

                    {/* <br /> */}
                    <div className="img-game"><img src={joystick} alt="computer-game" className='img' /></div>
                </form>
            </div>
        </div>
    )
}


export default AddUser;