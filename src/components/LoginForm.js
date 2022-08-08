import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import joystick from '../assets/joystick.png';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({        //variable to save the login input details
        name: "",
        id: "",
        userName: "",
        type: "",
        LoggedIn: false
    });

    const submitHandler = e => {//send the login input details to LoginApp component when submit
        e.preventDefault();

        Login(details);
    }

    // console.log('LoginForm state', details);

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2 className="form-title">Login</h2>
                {(error !== "") ? (
                    <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <lable htmlFor="name">UserName:</lable>
                    <input type="text" name="userName" id="userName" required onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />
                </div>
                <div className="form-group">
                    <lable htmlFor="password">Password:</lable>
                    <input type="password" name="password" id="password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <Button className="submit-button" type="submit" value="LOGIN">Login</Button>

                {/* <div className="img-game"><img src={joystick} alt="joystick" className='img' /></div> */}
            </div>
        </form>
    )
}

export default LoginForm;