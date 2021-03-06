import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Header} from './components/Header'
import {Content} from './components/Content'

import 'whatwg-fetch'
import TimeForm from './TimeForm'

//import ctime from './promise/Time' stateful App version
class App extends Component {

  constructor(props) {
    super(props)

    this.fetchCurrentTime = this
      .fetchCurrentTime
      .bind(this)

    this.handleFormSubmit = this
      .handleFormSubmit
      .bind(this)

    this.handleChange = this
      .handleChange
      .bind(this)

    this.state = {
      currentTime: null,
      msg: 'now',
      tz: 'PST'
    }
  }

  fetchCurrentTime() {
    fetch(this.getApiUrl())
      .then(resp => resp.json())
      .then(resp => {
        const currentTime = resp.dateString
        this.setState({currentTime})
      })
  }

  handleFormSubmit() {
    this.fetchCurrentTime()
  }

  handleChange(newState) {
    console.log('parent triggered!!')
    console.log('now state value is',newState)
    this.setState(newState)
  }

  getApiUrl() {
    const {tz, msg} = this.state
    const host = 'https://andthetimeis.com'

    return host + '/' + tz + '/' + msg + '.json'
  }

  render() {

    const {currentTime, tz} = this.state;
    const apiUrl = this.getApiUrl()

    return (
      <div>
        {!currentTime && <button onClick={this.fetchCurrentTime}>
          Get the current Time
        </button>}
        {currentTime && <div>The Current time is:{currentTime}</div>}

        <TimeForm
          onFormSubmit={this.handleFormSubmit}
          onFormChange={this.handleChange}
          tz={tz}
          msg='now'/>
        <p>
          We'll be making a request from:
          <code>{apiUrl}</code>
        </p>
      </div>
    )
  }
}

export default App