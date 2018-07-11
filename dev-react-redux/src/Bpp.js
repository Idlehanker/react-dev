import React from 'react';
//import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './redux-simples/async/reducers/index';
import App from './redux-simples/async/containers/App';

const middleware  = [ thunk ];
if(process.env.NODE_ENV !== 'production'){
	middleware.push(createLogger());
}

const store = createStore(
	reducer,
	applyMiddleware(...middleware)
);

export const Bpp = ()=>(
	<Provider store={store}>
		<App />
	</Provider>
);
