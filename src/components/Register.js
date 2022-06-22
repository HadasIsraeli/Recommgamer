import React, { useState, useMemo } from 'react';
import { LoggedInUser } from '../LoggedInUser';
import AddUser from './AddUser';
import App from '../App';

function Register() {
    const [user, setUser] = useState({
        name: "",
        id: "",
        nickname: "",
        type: "",
        LoggedIn: false,
        gender: '',
        age: ""
    });
    // const { logged_user, setUser } = useContext(LoggedInUser);
    // const { user } = useContext(LoggedInUser);
    // console.log('The User Is: ', user);

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
        // new_user.LoggedIn = true;
        let users = [...state.users, new_user];
        setState({
            users: users
        });
        setUser(new_user
            //     {
            //     name: new_user.name,
            //     nickname: new_user.nickname,
            //     type: new_user.type,
            //     id: new_user.id,
            //     LoggedIn: true,
            //     gender: new_user.gender,
            //     age: new_user.age
            // }
        );
        console.log('users list: ', new_user, users_list);
        //add with write to json 
    }
    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    console.log('The User Is: ', user);

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
        setUser(state);
        // this.props.history.push('/');
        // isLoggedIn = false;
        console.log("Logout", user.LoggedIn, user);
    }

    return (
        <div className="App">
            {(user.LoggedIn === false) ? (


                <div>
                    <LoggedInUser.Provider value={value}>
                        <AddUser addUser={addUser} />
                    </LoggedInUser.Provider>
                </div>
            ) : (
                <div className="welcome">
                    <h1>HHHHH</h1>
                    <div className="welcome">
                        <LoggedInUser.Provider value={value}>
                            <App />
                        </LoggedInUser.Provider>
                        <button className="logout-button" onClick={Logout}>Logout</button>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Register;
