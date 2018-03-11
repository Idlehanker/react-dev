import Greeting from "./Greeting";
import React from 'react'

// function LoginButton(props) {     return (         <button
// onclick={props.onClick}>             Login         </button>     ); }
// function LogoutButton(props) {     return (         <button
// onClick={props.onClick}>             Lougout         </button>     ); }

class Button extends React.Component {
    render() {

        const flag = (this instanceof LogoutButton)
            ? true
            : false
        const text = flag
            ? 'Logout'
            : 'Login';

        return (
            <button onClick={this.props.onClick}>
                {text}
            </button>
        )
    }
}
class LogoutButton extends Button {}
class LoginButton extends Button {}
/*
class LogoutButton extends React.Component {
    render() {
        console.log('props-onClick '+this.props.onClick);
        return (

            <button onClick={this.props.onClick}>
                Logout
            </button>
        )
    }
}

class LoginButton extends React.Component {
    render() {

        console.log('props-onClick '+this.props.onClick);

        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        )
    }
}
*/
class LoginControl extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor invoked:');

        this.handleLoginClick = this
            .handleLoginClick
            .bind(this)
        this.handleLogoutClick = this
            .handleLogoutClick
            .bind(this)
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        console.log('login clicked!')
        this.setState({isLoggedIn: true})
    }
    handleLogoutClick() {
        console.log('logout clicked!')
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        //debugger;
        console.log('isLoggedIn:' + isLoggedIn);
        let button = null
        if (!isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick}/>
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default LoginControl