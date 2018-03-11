import React from "react";
/*
function UserGreeting(props) {
    return <h1>
        Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
}
*/

class Greeting extends React.Component {

    UserGreeting(props) {
        return <h1>
            Welcome back!</h1>
    }

    GuestGreeting(props) {
        return <h1>Please sign up.</h1>
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        /*
        if (isLoggedIn)
            return (<UserGreeting />)
        return (<GuestGreeting/>)
        */
        if (isLoggedIn) 
            return this.UserGreeting()
        else 
            return this.GuestGreeting()
    }
}

export default Greeting