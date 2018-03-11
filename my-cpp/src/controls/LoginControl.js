import Greeting from "./Greeting";
import React from 'react'

// function LoginButton(props) {
//     return (
//         <button onclick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {     return (         <button
// onClick={props.onClick}>             Lougout         </button>     ); }
/*
class Button extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}

class LogoutButton extends Button {
}
class LoginButton extends Button {
}
*/
class LogoutButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}

class LoginButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        )
    }
}

class LoginControl extends React.Component {

    constructor(props) {
        super(props)
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.state = {
            isLoggedIn : false
        }
    }

    handleLoginClick() {
        this.setState({isLoggedIn : true})
    }
    handleLogoutClick() {
        this.setState({isLoggedIn : false})
    } 

    render() {
        const isLoggedIn = this.state.isLoggedIn

        let button = null
        if (!isLoggedIn) {
            
            button = <LoginButton conClick={this.handleLoginClick}/>
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }

        return (
            <div>
                {button}<Greeting isLoggedIn={isLoggedIn}/> 
            </div>
        );
    }
}

export default LoginControl