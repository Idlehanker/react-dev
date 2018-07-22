import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import api from '../middleware/api';
import DevTools from '../containers/DevTools';

import rootReducer from '../reducers';

const configureStore = preloadedState => {
	const store = createStore(
		rootReducer,
		preloadedState,
		compose(
			applyMiddleware(thunk, api, createLogger()),
			DevTools.instrument()
		)
	);


	if(module.hot){
		module.hot.accept('../reducers', ()=>{
			store.replaceReducer(rootReducer);
		});
	}
    
	return store;
};

export default configureStore;
