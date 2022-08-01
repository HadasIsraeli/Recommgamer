import React, { useContext, useState } from 'react';
import controller from '../assets/controller.png';
import { SearchContext } from '../LoggedInUser';
import { doc, updateDoc, deleteField } from "firebase/firestore";
import db from './firebase';

function WelcomePage() {
  //desplaying the users information - name, userName, age, gender, search history, etc.
  const { user, setUser } = useContext(SearchContext);
  let user_type = user.type;
  let user_history = user.history;
  let game_names;
  const [results_open, setResultsOpen] = useState();
  const [game_results, setResults] = useState();

  const seeResults = (index) => {
    game_names = user_history[index].game_names;
    console.log('game_name_review', game_names);
    setResults(game_names);
    setResultsOpen(true);
  }

  const close = () => {
    setResults();
    setResultsOpen(false);
  }

  const clearHistory = () => {
    const historyRef = doc(db, "users", user.id);
    updateDoc(historyRef, {
      History: deleteField()
    }).then(value => {
      setUser({
        name: user.name,
        userName: user.userName,
        type: user.type,
        id: user.id,
        LoggedIn: true,
        gender: user.gender,
        age: user.age,
        mail: user.mail,
        history: null
      });
    });
  }

  console.log('user_history', user_history);
  console.log('The User Is: ', user_type, user);

  return (
    <div className="App">
      <h1 className="headline">Welcome to RecommGamer!</h1>
      <div className="user">
        <h2>{user.userName} </h2>
        <div>Name: {user.name} </div>
        <div>Age: {user.age} </div>
        <div>Gender: {user.gender} </div>
        <div>Mail: {user.mail} </div>
        {(user.type === 'admin') ? (
          <div> </div>
        ) : (((!user_history)) ? (
          <div>Search History: nothing for now :P </div>
        ) : (
          <div>
            <div>History: </div>
            <button onClick={() => { clearHistory() }}>clear History</button>
            <div>
              {(user_history) ? user_history.map((game, index) => {
                return (
                  <div className="results">
                    <p> {index + 1}. {game.search_input}</p>
                    <button onClick={() => { seeResults(index) }}>see results</button>
                  </div>
                )
              }) : <div></div>}
            </div>

            <div>{(results_open)
              ? <div className="form-result">
                <button onClick={() => { close() }}>close</button>
                {(game_results)
                  ? game_results.map((result, index) => {
                    return (
                      <div>
                        <p> {index + 1}. {result}</p>
                      </div>
                    )
                  }) : <p></p>
                }
              </div>
              : <p></p>}
            </div>
          </div>
        )
        )}
      </div>
      <div className="welcome-game"><img src={controller} alt="computer-game" className="welcome-img" /></div>
    </div>
  );
}

export default WelcomePage;