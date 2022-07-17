import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import joystick from '../assets/joystick.png';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({
        name: "",
        id: "",
        userName: "",
        type: "",
        LoggedIn: false
    });

    const submitHandler = e => {
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
                {/* <div className="form-group">
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div> */}
                <div className="form-group">
                    <lable htmlFor="name">UserName:</lable>
                    <input type="text" name="userName" id="userName" onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />
                </div>
                <div className="form-group">
                    <lable htmlFor="password">Password:</lable>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <Button className="submit-button" type="submit" value="LOGIN">Login</Button>

                <div className="img-game"><img src={joystick} alt="joystick" className='img' /></div>
            </div>
        </form>
    )
}

export default LoginForm;