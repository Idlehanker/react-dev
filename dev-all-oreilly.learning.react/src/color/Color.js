import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Star from './Star'
import StarRating from './StarRating'

import './stylesheets/Color.scss'

export class  Color extends Component{

	componentWillMount(){
		this.style = {backgroundColor: '#CCC'}
	}

	render(){
		const { title, rating, color, onRate } = this.props

		return (
			<section className='color' style={this.style}>
				<h1 ref='title'>{title}</h1>
				<div className='color' 
					style={{ backgroundColor: color}}>
				</div>
				<StarRating starsSelected={rating} onRate={onRate}/>
			</section>
		)
	}
}

Color.PropType = {
	title: PropTypes.string,
	rating: PropTypes.number,
	color: PropTypes.string,
	onRate: PropTypes.func
}

Color.defaultProps = {
	title: undefined,
	rating: 0,
	color: '#000000',
	onRate: f=>f
}