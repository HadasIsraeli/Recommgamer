import React, { useState, useMemo, useContext } from 'react';
import { SearchContext } from '../LoggedInUser';
import AddUser from './AddUser';
import App from '../App';
import { useHistory, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Register() {
    let history = useHistory();
    const { user, setUser } = useContext(SearchContext);
    // const [user, setUser] = useState({
    //     name: "",
    //     id: "",
    //     nickname: "",
    //     type: "",
    //     LoggedIn: false,
    //     gender: '',
    //     age: ""
    // });

    const state = {
        users: [
            {
                name: 'Hadas', nickname: 'Dusa', age: 26, gender: 'blue', id: 1, password: null, mail: null, LoggedIn: false
            },
            {
                name: 'Inbar', nickname: 'Bari', age: 27, gender: 'pink', id: 2, password: null, mail: null, LoggedIn: false
            },
            {
                name: 'Grisha', nickname: 'Greg', age: 29, gender: 'RED', id: 3, password: null, mail: null, LoggedIn: false
            }
        ]
    };

    const [users_list, setState] = useState({ users: state.users });

    const addUser = (new_user) => {
        console.log(new_user);
        new_user.id = Math.random();
        new_user.type = 'basic';
        new_user.LoggedIn = true;
        let users = [...state.users, new_user];
        setState({
            users: users
        });
        setUser(new_user);
        console.log('users list: ', new_user, users_list);
        //add with write to json 
        history.push('/WelcomePage');

    }
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    console.log('The User Is: ', user, users_list);

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
        // setUser(state);
        history.push('/');
        console.log("Logout", user.LoggedIn, user);
    }

    return (
        <div className="App">
            {/* {(user.LoggedIn === false) ? ( */}
            <div>
                <h1 className="headline">Hello New Friend!</h1>
                {/* <Button className="right-navbar">
                    <NavLink to='/'>Login</NavLink>
                </Button> */}
                {/* <LoggedInUser.Provider value={value}> */}
                <AddUser addUser={addUser} />
                {/* </LoggedInUser.Provider> */}
            </div>
            {/* ) : (
                <div className="welcome">
                    <div className="welcome">
                        <LoggedInUser.Provider value={value}>
                            <App />
                        </LoggedInUser.Provider>
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                </div>
            )} */}
        </div>
    );
}


export default Register;
