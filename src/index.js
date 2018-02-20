import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import firebase from 'firebase';

import store, { history } from './data/store';
import { config } from './credentials';

import App from './App';

import '../node_modules/normalize.css/normalize.css'
import 'material-components-web/dist/material-components-web.min.css';
import './index.css';

firebase.initializeApp(config);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root'));
