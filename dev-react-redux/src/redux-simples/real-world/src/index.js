import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { render } from 'react-dom';

const store = configureStore();

render(
	<Router>
		<Root store={store}/>
	</Router>,
	document.getElementById('root')
);