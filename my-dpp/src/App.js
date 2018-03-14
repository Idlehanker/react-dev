import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header'
import {Content} from './components/Content'

import 'whatwg-fetch'
//import ctime from './promise/Time'

//stateful App version
class App extends Component {
  render() {
    //ctime()

    return (  
      <div class="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
