import React, { Component } from 'react';

import AddUser from './AddUser';


class Register extends Component {
    state = {
        users: [
            {
                name: 'Hadas', age: 26, gender: 'blue', id: 1, password: null, mail: null
            },
            {
                name: 'Inbar', age: 27, gender: 'pink', id: 2, password: null, mail: null
            },
            {
                name: 'Grisha', age: 29, gender: 'RED', id: 3, password: null, mail: null
            }
        ]
    };


    addUser = (user) => {
        // console.log(user);
        user.id = Math.random();
        let users = [...this.state.users, user];
        this.setState({
            users: users
        })
    }


    render() {
        return (
            <div className="App">
                <AddUser addUser={this.addUser} />
            </div>
        );
    }
}

export default Register;
