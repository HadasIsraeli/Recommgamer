import React, { useContext } from 'react';
import controller from '../assets/controller.png';
import { LoggedInUser } from '../LoggedInUser';

function WelcomePage() {
  //desplaying the users information - name, nickname, age, gender, search history, etc.
  const { user } = useContext(LoggedInUser);
  let user_type = user.type;
  console.log('The User Is: ', user_type, user);


  return (
    <div className="App">
      <h1 className="headline">Welcome to Game Searcher!</h1>
      <div className="user">
        <div>Name: {user.name} </div>
        <div>NickName: {user.nickname} </div>
        <div>Age: {user.age} </div>
        <div>Gender: {user.gender} </div>
        {(user.type == 'manager') ? (
          <div> </div>
        ) : (
          <div>Search History: nothing for now :P </div>
        )}
      </div>
      <div className="welcome-game"><img src={controller} alt="computer-game" className="welcome-img" /></div>
    </div>
  );
}


export default WelcomePage;
