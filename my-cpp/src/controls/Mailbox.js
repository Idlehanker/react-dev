import React from 'react'

class Mailbox extends React.Component {
    render() {

        const unreadMessage = this.props.unreadMessage;

        return (
            <div>
                <h1>Hello</h1>
                {unreadMessage.length > 0 && <h2>You have {unreadMessage.length}
                    unread messages.</h2>}
            </div>
        )
    }
}

export default Mailbox