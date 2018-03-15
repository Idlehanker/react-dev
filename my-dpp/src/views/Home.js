import {connect} from 'react-redux'
import React from 'react'

const mapStateToProps = state => {
    return {currentTime: state.currentTime}
}

const Home = (props) => {
    return (
        <div className="home">
            <h1>Welcome home!</h1>
            <p>Current time: {props.currentTime}</p>
        </div>
    )
}

export default connect(mapStateToProps)(Home)