import React, { Component } from 'react'

const PeopleList = ({data}) =>
	<ol>
		{data.results.map(
			(person, i) => {
				const { first, last } = person.name
				return <li key={i}>{first} {last}</li>
			}
		)}
	</ol>

const RandomMeUsers = ({count}) => DataComponent(
	PeopleList,
	`https://randomuser.me/api/?results=${count}`
)

export default RandomMeUsers

const DataComponent = (ComposedComponent, url)=>(
	class DataComponent extends Component{

		constructor(props){
			super(props)
			this.state = {
				data: [],
				loading: false,
				loaded: false
			}
		}

		componentWillMount(){
		//const {url}  = this.props
			this.setState({loading: true})
			fetch(url)
				.then(response => response.json())
				.then(data=> this.setState(
					{
						loading: false,
						loaded: true,
						data
					}
				))
		}
		render(){
		//const { ComposedComponent }  = this.props
			return ( 
				<div>
					{(this.state.loading)?
						<div>Loading ...}</div> :
						<ComposedComponent {...this.state}/>
					}
				</div>
			)
		}
    
	}
)