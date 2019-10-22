import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import {Router, Route, browserHistory} from 'react-router';
import Login from './components/Login';
import App from './App';


ReactDOM.render(
    (
        /* historíco de navegação para podermos realizar a navegação entra as rotas */
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App}/>
        </Router>
    ), 
document.getElementById('root')
);



