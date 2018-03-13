import React from 'react'
import Welcome from './Welcome'
import Comment from './Comment'
import Clock from './Clock'

import Toggle from './controls/Toggle'
// import Greeting from './controls/Greeting'
import LoginControl from './controls/LoginControl'
import Mailbox from './controls/Mailbox'
import Page from './controls/Page'
import NumberList from './controls/NumberList'

import NameForm from './input-controls/NameForm'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      date: null
    };
  }
  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    }, 1000)
  }

  componentDidMount() {
    console.log('id=' + this.intervalId)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {

    const message = ['React', 'Re: React', 'Re:Re: React']
    const numbers = [1, 2, 3, 4, 5]

    const ele2 = (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date}.</h2>
        <Welcome name="Mike"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
        <Comment/>
        <hr/>
        <Clock/>
        <Toggle/>
        <LoginControl/>
        <Mailbox unreadMessage={message}/>
        <Page/>
        <NumberList numbers={numbers}/>
        <NameForm />
      </div>
    )

    return (ele2)
  }
}

export default App