import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/*global it :true*/
/*eslint no-undef: "error"*/
it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
	ReactDOM.unmountComponentAtNode(div)
})
