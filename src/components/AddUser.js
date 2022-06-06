import React, { Component } from 'react';

import joystick from '../assets/computer-game.png';

class AddUser extends Component {
    state = {
        username: null,
        age: null,
        gender: null,
        password: null,
        mail: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
        //add with write to json 
    }

    render() {
        return (
            <div className="form-inner">
                <form onSubmit={this.handleSubmit} className="form-register">
                    <h2 className="form-title">Register:</h2>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <input type="text" id="gender" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Mail:</label>
                        <input type="text" id="mail" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="text" id="password" onChange={this.handleChange} />
                    </div>
                    <button className="submit-button">Submit</button>

                    {/* <br /> */}
                    <div className="img-game"><img src={joystick} alt="computer-game" className='img' /></div>
                </form>
            </div>
        )
    }
}

export default AddUser;