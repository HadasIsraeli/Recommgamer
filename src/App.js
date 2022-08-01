import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import UsersPage from './components/UsersPage';
import Register from './components/Register';
import LoginApp from './components/LoginApp';
import WelcomePage from './components/WelcomePage';

import { LoggedContextWrapper } from './LoggedInUser';

function App() {
  return (
    <LoggedContextWrapper>
      <Navbar />
      <Switch>
        <Route exact path='/' component={LoginApp} />
        <Route exact path='/Register' component={Register} />
        <Route exact path='/WelcomePage' component={WelcomePage} />
        <Route exact path='/UsersPage' component={UsersPage} />
        <Route exact path='/SearchPage' component={SearchPage} />
      </Switch>
    </LoggedContextWrapper>
  );
}

export default App;