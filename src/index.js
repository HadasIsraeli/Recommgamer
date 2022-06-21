import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import LoginApp from './LoginApp';
import Register from './components/Register';


const history = createBrowserHistory();
// 
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={LoginApp} />
      <Route exact path='/Register' component={Register} />
      <Route exact path='/' component={App} />
    </Switch>
   </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

