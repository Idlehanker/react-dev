import React from 'react'
import PropType from 'prop-types'
import './stylesheets/Star.scss'


const Star = ({ selected = false, onClick = f=>f }) =>
	<div className={( selected )? 'star selected' : 'star'}
		onClick={onClick}>
	</div>

Star.PropType = {
	selected: PropType.bool,
	onClick: PropType.func
}

export default Star