import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

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

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2 className="form-title">Login</h2>
                {(error !== "") ? (
                    <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <lable htmlFor="name">UserName</lable>
                    <input className="input-box" type="text" name="userName" id="userName" required onChange={e => setDetails({ ...details, userName: e.target.value })} value={details.userName} />
                </div>
                <div className="form-group">
                    <lable htmlFor="password">Password</lable>
                    <input className="input-box" type="password" name="password" id="password" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                </div>
                <Button className="submit-button" type="submit" value="LOGIN">Login</Button>

            </div>
        </form>
    )
}

export default LoginForm;