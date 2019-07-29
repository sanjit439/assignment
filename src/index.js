import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './css/index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/Reducers/reducer'

const store=createStore(reducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


