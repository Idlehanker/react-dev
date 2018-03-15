import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App1 from './App1'
// import {App2} from './App2'
import Root from './containers/Root'

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App2 />, document.getElementById('root'));
// ReactDOM.render(<App1 />, document.getElementById('root'))
ReactDOM.render(<Root />,document.getElementById('root'))


registerServiceWorker();
