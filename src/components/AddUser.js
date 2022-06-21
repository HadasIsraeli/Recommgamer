import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import joystick from '../assets/computer-game.png';
import { LoggedInUser } from '../LoggedInUser';
import App from '../App';

function AddUser({ addUser }) {
    const { user } = useContext(LoggedInUser);
    let user_type = user.type;
    console.log('The User Is: ', user_type, user);

    const [state, setState] = useState({
        name: user.name,
        age: user.age,
        gender: user.gender,
        password: user.password,
        mail: user.mail,
        nicname: user.nicname,
        LoggedIn: user.LoggedIn,
        // type:'basic'
    });
    // const handleChange = (e) => {
    //     setState({
    //         [e.target.id]: e.target.value
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        setState({
            LoggedIn: true
        });

        addUser(state);
        console.log(state);
    }

    const Logout = () => {
        setState({
            name: "",
            id: "",
            nickname: "",
            type: "",
            LoggedIn: false,
            gender: '',
            age: ""
        });
        // this.props.history.push('/');
        // isLoggedIn = false;
        console.log("Logout", user.LoggedIn, user);
    }

    console.log(state.LoggedIn, state);

    return (
        <div>
            {(!state.LoggedIn) ? (
                <div className="welcome">
                    <h1 className="headline">Hello New Friend!</h1>
                    <Button className="right-navbar">
                        <NavLink to='/'>Login</NavLink>
                    </Button>
                </div>
            ) : (
                <div className="welcome">
                    <App />

                    <button className="logout-button" onClick={Logout}>Logout</button>
                </div>
            )}
            {(!state.LoggedIn) ? (
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
            ) : (
                <div className="welcome">
                    <h1></h1>
                </div>
            )}
        </div>
    )
}


export default AddUser;