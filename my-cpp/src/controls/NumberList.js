import React from 'react'

class NumberList extends React.Component {
    render() {
        const numbers = this.props.numbers
        const listItems = numbers.map(number => <li>{number}</li>)
        return (
            <ul>{listItems}</ul>
        )
    }
}

export default NumberList