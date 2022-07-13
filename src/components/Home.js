import { stringify } from '@firebase/util';
import React, { useState } from 'react';
import $ from 'jquery';

function Home() {
  
  const [state, setState] = useState("");

  const [game_name, setName] = useState("");

  const [Results, setResults] = useState();
  const [recommended, setrecommended] = useState();
  // handleChange = (selectedOption) => {
  //   this.setState({ selectedOption }, () =>
  //   console.log(`Option selected:`, this.state.selectedOption)
  //   );
  // };

  const handleInput = (gameName) => {
    setState(gameName.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
      url: 'http://127.0.0.1:3000/responer',
      type: 'post',
      contentType: "application/json; charset=utf-8",
      cache: false,
      dataType: 'json',
      data: JSON.stringify(data_send),
      success: function (dataReceived) {
        dataReceived = JSON.parse(dataReceived);
        setState("");
        setResults(dataReceived);
        setrecommended(dataReceived['recommended games']);
        console.log('Results', Results, recommended);
        console.log("The json response:", dataReceived)
        console.log("User search uid:", dataReceived['uid'])
        console.log("List of recommended games:", dataReceived['recommended games']) //list
      },
      error: function (xhr, thrownError) {
        console.log("ERROR Status:", xhr.status, "-", thrownError)
      }
    });

  }

  return (
    <div className="App">
      <h1 className="headline">Search Your Next Game:</h1>
      <div className="form-search">
        <input className="input-search" type="text" placeholder="Enter Game Name" id="gameName" onChange={handleInput} />

        {/* <Select className="select-key"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          /> */}

        {/* <button className="submit-button" type="submit" onClick={handleSubmit}>Search</button> */}
        <button class="bn31" type="submit" onClick={handleSubmit}><span class="bn31span">Search</span></button>
      </div>
      <div>
        <h2 className="headline">Search Results For : {game_name} </h2>
        {/* {recommended.map(game=>{
          <p>Game Name: {game}</p>
        })} */}
        <p>{recommended}</p>
      </div>
    </div>
  );
}

export default Home;