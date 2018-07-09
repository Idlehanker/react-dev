import React from 'react'
import PropType from 'prop-types'
import Star from './Star'

const StarRating  = ({ starsSelected = 0, totalStars = 5, onRate = f=>f}) =>
	<div className='star-rating'>
		{[...Array(totalStars)].map((item,i)=>
			<Star key={i} selected={i<starsSelected}
				onClick={()=> onRate(i+1)}/>
		)}
		<p>{starsSelected} of {totalStars} starts </p>

	</div>

StarRating.propTypes  = {
	starsSelected: PropType.number,
	totalStars: PropType.number,
	onRate: PropType.func
}


export default StarRating