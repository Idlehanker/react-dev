import React from 'react'
import Welcome from './Welcome'
import Comment from './Comment'

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date: null
    };
  }
  componentWillMount(){
    this.intervalId = setInterval(()=>{
      this.setState({
        date: new Date().toLocaleTimeString()
      });
    },1000)
  }

  componentDidMount(){
    console.log('id='+this.intervalId)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render(){
    const ele2 = (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date}.</h2>
        <Welcome name="Mike"/>
        <Welcome name="Cahal"/>
        <Welcome name="Edite"/>
        <Comment />
      </div>
    )

    return (ele2)
  }
}

export default App
