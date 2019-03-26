import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import initAppLocalStorage from 'localStorage';
import store from 'store';

import 'normalize.css';
import 'style/index.scss';

import App from 'App';

import * as serviceWorker from './serviceWorker';

initAppLocalStorage();

ReactDOM.render((
    <Router>
        <Provider store={store}>
            <App/>
        </Provider>
    </Router>
), document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
