import { stringify } from '@firebase/util';
import React, { useState } from 'react';
import $ from 'jquery';

function Home() {

  // let history={
  //   search:"",
  //   res:[]
  // }

  const [is_empty,setEmpty] = useState(false);

  const [state, setState] = useState("");

  const [game_name, setName] = useState("");

  const [Results, setResults] = useState();
  const [recommended, setrecommended] = useState();

  const handleInput = (gameName) => {

    setState(gameName.target.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(state);

    if (!state) {
      setEmpty(true);
      console.log('Your search is empty :/ , please enter a game name! ', state, is_empty);
    } else {
      setEmpty(false);
      // setName(document.getElementById('gameName').value);
      setName(state);

      // let search_game_obj = {
      //   // keyword: this.state.selectedOption.value,
      //   game_name: state
      //   // uid:"345678912345",
      // }

      document.getElementById('gameName').value = '';
      console.log('gameName', state, game_name);
      //add with write to json 
      const data_send = {
        "user input": {
          "game_name": state
        }
      }
      console.log('data_send', data_send);

      $.ajax({
        url: 'http://127.0.0.1:5000/responer',
        type: 'post',
        contentType: "application/json; charset=utf-8",
        cache: false,
        dataType: 'json',
        data: JSON.stringify(data_send),
        success: function (dataReceived) {
          dataReceived = JSON.parse(dataReceived);
          // setState("");
          setResults(dataReceived);
          setrecommended(dataReceived['recommended games']);
          console.log('Results', Results, recommended);
          console.log("The json response:", dataReceived)
          console.log("User search uid:", dataReceived['uid'])
          console.log("List of recommended games:", dataReceived['recommended games']); //list


          // push history to firestore as 'History' 
        },
        error: function (xhr, thrownError) {
          console.log("ERROR Status:", xhr.status, "-", thrownError)
        }
      });
      setState("");
    }



  }



  return (
    <div className="App">
      <h1 className="headline">Search Your Next Game:</h1>
      <p className="headline">The following results are based on users reviews... Please enter a game name that you like</p>

      <div className="form-search">
        <input className="input-search" type="text" placeholder="Enter Game Name" id="gameName" onChange={handleInput} />

        {/* <button className="submit-button" type="submit" onClick={handleSubmit}>Search</button> */}
        <button class="bn31" type="submit" onClick={handleSubmit}><span class="bn31span">Search</span></button>
      </div>
      <div>
        {(is_empty)
          ? <h2 className="headline">Your search is empty :/ , please enter a game name!</h2>
          : <p></p>
        }
      </div>
      <div>
        {(game_name)
          ? <h2 className="headline">Based on reviews, people who liked ~ {game_name} ~ also liked the following games: </h2>
          : <p></p>
        }
        {/* <h2 className="headline">Based on reviews, people who liked {game_name} also liked the following games: </h2> */}

        {/* <h2 className="headline">Games you my like based on your search : {game_name} </h2> */}

        {/* {recommended.map(game=>{
          <p>Game Name: {game}</p>
        })} */}
        <p>{recommended}</p>
      </div>
    </div>
  );
}

export default Home;