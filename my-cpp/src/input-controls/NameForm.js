import React from 'react'

class NameForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit'/>
            </form>
        )
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        alert('A name as submitted: ' + this.state.value);
        e.preventDefault()
    }

    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = this
            .handleChange
            .bind(this)
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
    }
    
}


export default NameForm