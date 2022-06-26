import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import joystick from '../assets/joystick.png';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({
        name: "",
        id: "",
        nickname: "",
        type: "",
        LoggedIn: false
    });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    console.log('LoginForm state', details);

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2 className="form-title">Login</h2>
                {(error !== "") ? (
                    <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" name="name" id="name" onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                </div>
                {/* <div className="form-group">
                    <lable htmlFor="name">ID:</lable>
                    <input type="number" name="id" id="id" onChange={e => setDetails({ ...details, id: e.target.value })} value={details.id} />
                </div> */}
                <div className="form-group">
                    <lable htmlFor="name">NickName:</lable>
                    <input type="text" name="nickname" id="nickname" onChange={e => setDetails({ ...details, nickname: e.target.value })} value={details.nickname} />
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
