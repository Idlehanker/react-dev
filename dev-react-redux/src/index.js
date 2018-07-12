import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './redux/store/index';

import { Bpp } from './Bpp';

/*
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
*/
ReactDOM.render(
	<Bpp/>,
	document.getElementById('root'));
registerServiceWorker();
