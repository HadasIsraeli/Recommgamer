import React, { useState } from 'react';
import joystick from '../assets/computer-game.png';


function AddUser({ addUser, error }) {

    const [state, setState] = useState({        //variable to save the registration input details
        name: "",
        id: "",
        userName: "",
        type: "",
        LoggedIn: null,
        gender: '',
        age: "",
    });

    const handleSubmit = (e) => {//send the registration input details to Register component when submit
        e.preventDefault();

        addUser(state);
        // console.log('Add user state', state);
    }

    // console.log('add user state', state);

    return (
        <form onSubmit={handleSubmit} className="form-register">
            <div className="form-inner">
                <h2 className="form-title">Register:</h2>
                {(error !== "") ? (
                    <p className="error">{error}</p>) : ""}
                <div class="form-group-inputs">
                    <div className="inner-group">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" required onChange={e => setState({ ...state, name: e.target.value })} value={state.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">userName:</label>
                            <input type="text" name="userName" id="userName" required onChange={e => setState({ ...state, userName: e.target.value })} value={state.userName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input type="number" name="age" id="age" min="13" required onChange={e => setState({ ...state, age: e.target.value })} value={state.age} />
                        </div>
                    </div>
                    <div className="inner-group">
                        <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <input type="text" name="gender" id="gender" required onChange={e => setState({ ...state, gender: e.target.value })} value={state.gender} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">Mail:</label>
                            <input type="mail" name="mail" id="mail" required onChange={e => setState({ ...state, mail: e.target.value })} value={state.mail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" required onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />
                        </div>
                    </div>
                </div>
                <button className="submit-button" type="submit" value="SIGNIN">Submit</button>

                {/* <div className="img-game"><img src={joystick} alt="computer-game" className='img' /></div> */}
            </div>
        </form >
    )
}

export default AddUser;