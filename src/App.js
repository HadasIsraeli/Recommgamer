import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UsersPage from './components/UsersPage';
import Register from './components/Register';
import LoginApp from './LoginApp';
// // import LoginForm from './components/LoginForm';
import WelcomePage from './components/WelcomePage';

import {  SearchContextWrapper} from './LoggedInUser';

function App() {

  // const [user, setUser] = useState({
  //   name: "",
  //   id: "",
  //   nickname: "",
  //   type: "",
  //   LoggedIn: false,
  //   gender: '',
  //   age: ""
  // });

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  // render() {
  return (
    <SearchContextWrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LoginApp} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/WelcomePage' component={WelcomePage} />
        <Route exact path='/UsersPage' component={UsersPage} />
        <Route exact path='/Home' component={Home} />

        {/* <Route exact path='/App' component={App} /> */}
      </Switch>
    </SearchContextWrapper>

    // <BrowserRouter>
    //   <div className="App">
    //     <Navbar />
    //     <Route>
    //     <Route exact path='/' component={WelcomePage} />
    //       <Route exact path='/UsersPage' component={UsersPage} />
    //       <Route exact path='/Home' component={Home} />
    //       {/* <Route exact path='/Register' component={Register} />
    //       <Route path='/Login' component={LoginForm} /> */}
    //     </Route>
    //   </div>
    // </BrowserRouter>
  );
}
// }

export default App;