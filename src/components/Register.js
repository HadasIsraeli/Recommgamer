import React, { useState, useContext } from 'react';
import { LoggedContext } from '../LoggedInUser';
import AddUser from './AddUser';
import { useHistory } from 'react-router-dom';
import db from './firebase';
import { collection, getDocs, addDoc, updateDoc,doc } from "firebase/firestore";
import validator from 'validator';

function Register() {
    let history = useHistory();
    let user_match = false;
    const { user, setUser } = useContext(LoggedContext);

    const [users_list, setList] = useState([]);// Puts users data in an array
    const [error, SetError] = useState("");

    const getUsers = async () => {          // Collects the data from FireStore and triggers  SetUsers.
        const data = await getDocs(collection(db, "users"));
        setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    if (users_list.length < 1) {
        console.log('users0', users_list);
        getUsers();//call the getUsers method and trigger the collect data from FireStore.
    }
    else {
        console.log('users1', users_list);
    }

    const usersCollectionRef = collection(db, "users");

    const addUser = (new_user) => {
        SetError('');
        //check if inputs are valid
        if (!validator.isAlpha(new_user.name)) { //validate name input to alphabetic characters only
            console.log('Details do not match! invalid name');
            SetError('Invalid Name! Please input letters only');
        }

        else if (!validator.isEmail(new_user.mail)) {  //validate mail input to proper mail form
            console.log('Details do not match! invalid email');
            SetError('Sorry! try somthing like "foo@bar.com"...');
        }

        else if (!validator.isStrongPassword(new_user.password, { //validate password input to have the conditions
            minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1    //conditions to valid password
        })) {
            console.log('Details do not match! invalid password');
            SetError('Invalid password! minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1');
        } else {
            //check if there is no userName as such
            users_list.map((user, index) => {
                if (new_user.userName === user.userName) {
                    user_match = true;
                    console.log('Details do not match! name exists');
                    SetError('Sorry! There is alraedy a userName ' + new_user.userName + ' in the system! try somthing else...');
                }
                else {
                    if ((index === users_list.length - 1) && (user_match === false)) { //creating a new user if validating passed and the is no maching userName
                        console.log('the new_user details are Validated', new_user);
                        new_user.id = Math.random().toString();
                        new_user.type = 'basic';
                        new_user.LoggedIn = true;

                        addDoc(usersCollectionRef, {
                            name: new_user.name,
                            id: new_user.id,
                            userName: new_user.userName,
                            type: new_user.type,
                            gender: new_user.gender,
                            age: new_user.age,
                            password: new_user.password,
                            mail: new_user.mail,
                        }).then(value => {
                            console.log(value['id']);
                            new_user.id = value['id'];
                            setUser(new_user);
                            updateDoc(doc(db, "users", new_user.id), {
                                id: new_user.id
                            });
                        });

                        history.push('/WelcomePage'); //sending the new user to the main page
                    }
                }
            });
        }
        console.log('The User Is: ', user);
    }


    // console.log('The User Is: ', user);


    return (
        <div className="App">
            <h1 className="headline">Hello New Friend!</h1>
            <AddUser addUser={addUser} error={error} />
        </div>
    );
}

export default Register;