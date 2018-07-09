import React from 'react'
import PropTypes from 'prop-types'

import './stylesheets/AddColorForm.scss'

/*
export class AddColorForm extends Component{

    constructor(props){
        super(props)
        this.submit = this.submit.bind(this)
    }
    
  let _title, _color
  

  // const submit = e => {
  submit(e){

    e.preventDefault()

    const { onNewColor } = this.props
    onNewColor(_title.value, _color.value)

    _title.value = ''
    _color.value = '#000000'

    _title.focus()
  }

  render(){
    return(
      <form className='add-color' onSubmit={this.submit}>
        <input ref = { input => this._title  = input }
          type='text' placeholder='color title ...' required/>
        <input ref = { input => this._color  = input }
          type='color' placeholder='color title ...' required/>
        <button> Add </button>
      </form>
    )
  }
}
*/

const AddColorForm = ({ onNewColor = f=>f}) => {

	let _title, _color

	const submit = e => {
		e.preventDefault()
		onNewColor(_title.value, _color.value)
		_title.value = ''
		_color.value = '#000000'
		_title.focus()

	}

	return(
		<form className='add-color' onSubmit={submit}>
			<input ref = {input => _title = input}
				type='text'
				placeholder='color title ...' required />
			<input ref = {input => _color = input}
				type='color'
				required/>
			<button>ADD </button>
		</form>
	)
}

AddColorForm.propTypes = {
	onNewColor: PropTypes.func
}

export default AddColorForm
