import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import generateTree from './generateTree'
import Node from './containers/Node'

const tree = generateTree()
const store = createStore(reducer,tree)

ReactDOM.render(
	<Provider store={store}>
		<Node id={0}/>
	</Provider>,
	document.getElementById('root'))
registerServiceWorker()
