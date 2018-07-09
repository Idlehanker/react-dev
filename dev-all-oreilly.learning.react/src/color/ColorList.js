import PropTypes from 'prop-types'
import { Color } from './Color'
import './stylesheets/ColorList.scss'

import React, {Component} from 'react'

export class ColorList extends Component{

	render(){
		const { colors, onRate, onRemove } = this.props

		return (
			<div className='color-list'>
				{(colors.length === 0) ? 
					<p>No colors list . (Add a Color)</p>
					: colors.map( color =>
						<Color key={colors.id}
							{...color}
							onRate={(rating)=> onRate(color.id, rating)}
							onRemoeve={()=> onRemove(color.id)} />
					)
				}
			</div>
		)
	}
}

ColorList.PropType = {
	colors: PropTypes.array,
	onRate: PropTypes.func,
	onRemove: PropTypes.func
}

