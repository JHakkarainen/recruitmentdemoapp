import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './store/store'
import { loadJoke } from './actions/actions';

const store = configureStore()

store.dispatch(loadJoke())

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
