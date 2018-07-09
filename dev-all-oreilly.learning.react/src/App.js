/**
 * @flow
 */
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { MemberList } from './network/MemberList'
import ColorWidget from './color/ColorWidget'

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<MemberList count={5}/>
				<ColorWidget />
			</div>
		)
	}
}

export default App
