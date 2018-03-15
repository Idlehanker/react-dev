import React, {Component} from 'react'

const timezones = ['PST', 'MST', 'MDT', 'EST', 'UTC']

class TimeForm extends Component {

    constructor(props) {
        super(props)
        // this.
        this._handleChange = this
            ._handleChange
            .bind(this)
        this._handleFormSubmit = this
            ._handleFormSubmit
            .bind(this)

        const {tz, msg} = this.props
        this.state = {
            tz,
            msg
        }
    }

    _handleChange(evt) {
        typeof this.props.onFormChange === 'function' && this
            .props
            .onFormChange(this.state)
    }

    _changeTimeZone(evt) {
        const tz = evt.target.value
        this.setState({
            tz
        }, this._handleChange)
    }

    _changeMsg(evt) {
        const msg = encodeURIComponent(evt.target.value).replace(/%20/, '+')
        this.setState({
            msg
        }, this._handleChange)
    }

    _handleFormSubmit(evt) {
        evt.preventDefault()
        typeof this.props.onFormSubmit === 'function' && this
            .props
            .onFormSubmit(this.state)
    }

    render() {
        const {tz} = this.state

        return (
            <form onSubmit={this._handleFormSubmit}>
                <select onChange={this._changeTimeZone} defaultValue={tz}>
                    {timezones.map(t => {
                        return (
                            <option key={t} value={t}>{t}</option>
                        )
                    })}
                </select>
                <input
                    type="text"
                    placeholder="A chronic string message (such as 7 hours from now)"
                    onChange={this._changeMsg}/>
                <input type="submit" value="Update request"/>
            </form>
        )
    }
}

export default TimeForm