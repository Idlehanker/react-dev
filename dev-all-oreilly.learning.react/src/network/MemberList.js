import React, { Component } from 'react'
import { getFakeMembers } from './getFakeMembers'

const Member = ({ email, picture, name, location }) =>

 
  <div className='member'>
    <hr/>
    <img src={picture.thumbnail} alt=''/>
    <h1>{name.first} {name.last}</h1>
    <p><a href={'mailto:'+email}>{email}</a></p>
    <p>{location.city}, {location.state}</p>
  </div>
    

export class MemberList extends Component{

  constructor(props){
    super(props)

    this.state = {
      members: [],
      loading: false,
      error: null
    }
  }

  componentWillMount(){
    this.setState({loading: true})

    const { count } = this.props
    getFakeMembers( count ).then(
      members => {
        this.setState({members, loading: false})
      },
      error => {
        this.setState({error, loading: false})
      }
    )
  }

  componentWillUpdate(){
    console.log('updating lifecycle!!')
  }

  render(){
    const { members, loading, error } = this.state
    return (
      <div className='member-list'>
        {(loading) ? 
          <span>Loading ....</span>:
          members.length ? 
            members.map((user, i)=>
              <Member key={i}{...user} />
            ) : 
            <span>0 members loaded.</span>
        }
        {error ? <p>Error Loading Members: error</p>: ''}
      </div>
    )
  }
}