import React, { useState, useContext } from 'react';
import $ from 'jquery';
import { LoggedContext } from '../LoggedInUser';
import { updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore";
import db from './firebase';

function SearchPage() {
  let uid, recommended_games, dataReceived, search_history, game_review;
  // let review_open = false;
  const { user, setUser } = useContext(LoggedContext);

  const [is_empty, setEmpty] = useState("");
  const [state, setState] = useState("");
  const [game_name_search, setName] = useState("");
  const [recommended, setRecommended] = useState("");

  const [not_exist, setNotExist] = useState("");

  const [game_names_results, setGameNames] = useState();
  const [game_review_results, setGameReviews] = useState();
  const [review_open, setReviewOpen] = useState();
  const [searchLoad, setLoad] = useState(false);

  const handleInput = (gameName) => {
    setState(gameName.target.value);
    setEmpty("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName(state);
    setReviewOpen(false);
    setNotExist("");
    if (!state) {//if input is empty > dispalying error on screen
      setEmpty('Your search is empty :/ , please enter a game name!');
    }
    else if (state.length < 3) {//if input length is smaller then 3 > dispalying error on screen
      setEmpty('please enter the full game name');
    } else {
      setGameNames("");

      setName(state);
      setLoad(true);
      setNotExist("");
      document.getElementById('gameName').value = '';

      const data_send = {
        "user input": {
          "game_name": state
        }
      }

      //sending the game name to backend
      $.ajax({
        url: 'https://recommgamer--backend.herokuapp.com/responer',
        type: 'POST',
        contentType: "application/json",
        cache: false,
        dataType: 'json',
        data: JSON.stringify(data_send),
        success: function (data) {
          dataReceived = JSON.parse(data);
          if (dataReceived !== -1) {

            setNotExist("");
            // push history to firestore as 'History' 
            uid = dataReceived["uid"];
            recommended_games = dataReceived["recommended games"];

            setRecommended(recommended_games);
            setGameNames(Object.keys(recommended_games));
            setLoad(false);
            search_history = {
              "search_id": uid,
              "game_names": Object.keys(recommended_games),
              "search_input": state
            }

            const historyRef = doc(db, "users", user.id);
            updateDoc(historyRef, {
              History: arrayUnion(search_history)
            }).then(value => {
              getDoc(historyRef).then(val => {
                setUser({
                  name: user.name,
                  userName: user.userName,
                  type: user.type,
                  id: user.id,
                  LoggedIn: true,
                  gender: user.gender,
                  age: user.age,
                  mail: user.mail,
                  history: val.data().History
                });
              })
            });
          } else {
            setNotExist("Sorry this game is not in our Data , please enter a different game name!");
            setName("");
            setLoad(false);
            setState("");
          }
        },
        error: function (xhr, thrownError) {
          setNotExist("Sorry something went wrong, please try again...");
          setName("");
          setLoad(false);
          setState("");
        }
      });
      setState("");
    }
  }

  const seeReviews = (game_name_review) => {
    game_review = recommended[game_name_review].slice(0, 5);
    setGameReviews(game_review);
    setReviewOpen(true);
  }

  const close = () => {
    setGameReviews("");
    setReviewOpen(false);
  }

  return (
    <div className="App">
      <h1 className="headline">Search Your Next Game:</h1>
      <div className="search-bar">
        <p className="user">The following results are based on users reviews... Please enter a game name that you like</p>
        <div className="form-search">
          <input className="input-search" type="text" placeholder="Enter Game Name" id="gameName" onChange={handleInput} />
          <button className="bn31" type="submit" onClick={handleSubmit}><span class="bn31span">Search</span></button>
        </div>
      </div>
      <div>
        {(is_empty != "")
          ? <h2 className="text">{is_empty}</h2>
          : <p></p>
        }
      </div>
      <div>
        {(not_exist != "")
          ? <h2 className="text">{not_exist}</h2>
          : <p></p>
        }
      </div>
      <div>
        {(game_name_search)
          ? <h2 className="text">Based on reviews, people who liked ~ {game_name_search} ~ also liked the following games: </h2>
          : <div></div>
        }
      </div>
      <div className="results-wrap">
        {(game_names_results) ? game_names_results.map((game, index) => {
          return (
            <div className="results">
              <p> {index + 1}. {game}</p>
              <button onClick={() => { seeReviews(game) }}>see reviews</button>
            </div>
          )
        }) : <div></div>}
      </div>
      <div>{(review_open)
        ? <div className="form-review">
          <button onClick={() => { close() }}>close</button>
          {(game_review_results)
            ? game_review_results.map((game_review, index) => {
              return (
                <div>
                  <p> {index + 1}. {game_review}</p>
                </div>
              )
            }) : <p></p>
          }
        </div>
        : <p></p>}
      </div>
      <div>
        {(searchLoad)
          ? <div>
            <div class="loader">loading...</div>
          </div>
          : <div></div>
        }
      </div>
    </div>
  );
}

export default SearchPage;