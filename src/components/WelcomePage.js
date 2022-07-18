import React, { useContext } from 'react';
import controller from '../assets/controller.png';
import { SearchContext } from '../LoggedInUser';

function WelcomePage() {
  //desplaying the users information - name, userName, age, gender, search history, etc.
  const { user, setUser } = useContext(SearchContext);
  let user_type = user.type;
  let user_history = user.history;
  console.log('The User Is: ', user_type, user);

  return (
    <div className="App">
      <h1 className="headline">Welcome to Game Searcher!</h1>
      <div className="user">
        <div>Name: {user.name} </div>
        <div>UserName: {user.userName} </div>
        <div>Age: {user.age} </div>
        <div>Gender: {user.gender} </div>
        <div>Mail: {user.mail} </div>
        {(user.type === 'admin') ? (
          <div> </div>
        ) : (( (!user_history) )?(
          <div>Search History: nothing for now :P </div>
        ):(
          <><div>History: </div><div>{user_history.map((search, index) => {
                <div>
                  <p>{index}</p>
                  <p>{search}</p>
                </div>;
              })} </div></>
        )
        )}
      </div>
      <div className="welcome-game"><img src={controller} alt="computer-game" className="welcome-img" /></div>
    </div>
  );
}

export default WelcomePage;