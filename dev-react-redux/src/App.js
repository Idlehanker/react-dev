import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import List from './redux/components/List';
import Form from './redux/components/Form';

class App extends Component {
  
	render() {

		console.log('aa');
    
		return (
			<div className="row mt-5">
				<div className='col-md-4 offset-md-1'>
					<h2>Articals</h2>
					<List/>
				</div>
				<div clssName='col-md-4 offset-md-1'>
					<h2>Add a new artical</h2>
					<Form/>
				</div>
			</div>
		);
	}
}

export default App;
