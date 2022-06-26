import React, { useState } from 'react';
import joystick from '../assets/computer-game.png';

function AddUser({ addUser }) {

    const [state, setState] = useState({
        name: "",
        id: "",
        nickname: "",
        type: "",
        LoggedIn: null,
        gender: '',
        age: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        addUser(state);
        // console.log('Add user state', state);
    }

    console.log('add user state', state);

    return (
        <form onSubmit={handleSubmit} className="form-register">
            <div className="form-inner">
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
                    <input type="number" name="age" id="age" onChange={e => setState({ ...state, age: e.target.value })} value={state.age} />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" name="gender" id="gender" onChange={e => setState({ ...state, gender: e.target.value })} value={state.gender} />
                </div>
                <div className="form-group">
                    <label htmlFor="mail">Mail:</label>
                    <input type="mail" name="mail" id="mail" onChange={e => setState({ ...state, mail: e.target.value })} value={state.mail} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />
                </div>
                <button className="submit-button" type="submit" value="SIGNIN">Submit</button>

                <div className="img-game"><img src={joystick} alt="computer-game" className='img' /></div>
            </div>
        </form>


    )
}


export default AddUser;