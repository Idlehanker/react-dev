import React from 'react';

class StarRating extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            starSelected: 0
        }
        this.change = this.change.bind(this)
    }

    change(starSelected){
        ths.setState({starSelected})
    }

    render(){
        const {totalStars} = this.props
        const {starsSelected} = this.state

        return(
            <div className="star.rating">
                {[...Array(totalStars)].map((item, i)=>
                    <Star key={i}
                        selected={i<starsSelected}
                        onClick={()=>this.change(i+1)}
                    />
                )}
                <p>{starSelected} of {totalStars} stars</p>
            </div>
        )
    }
}

StarRating.prototype = {
    totalStars: PorpTypes.number
}

StarRating.defaultProps = {
    totalStars: 5
}