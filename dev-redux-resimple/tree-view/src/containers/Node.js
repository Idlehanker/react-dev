import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Node extends Component{

    handleIncrementClick = ()=>{
        const { increment, id }  = this.props
        increment(id)
    }

    handleRemoveClick = e => {
        e.preventDefault()

        const { removeChild, deleteNode, parentId, id } = this.props
        
        removeChild(parentId, id)
        deleteNode(id)
    }

    handleAddChildClick = e => {
        e.preventDefault()

        const { addChild, createNode, id }  = this.props
        const childId = createNode().nodeId
        addChild(id, childId)
    }

    renderChild = childId => {
        const {id} = this.props
        return (
            <li key={childId}>
                <ConnectedNode id={childId} parentId={id}/>
            </li>
        )
    }
    render() {
        const { counter, parentId, childIds }  = this.props
        return (
            <div>
                Counter: {counter}
                {' '}
                <button onClick={this.handleIncrementClick}>
                +
                </button>
                {' '}
                {typeof parentId !== 'undefined' &&
            <a href='#' onClick={this.handleRemoveClick}
            style={{color: 'lightgray', textDecoration:'none'}}>
            x
            </a>
        }
        <ul>
        {childIds.map(this.renderChild)}
        <li key='add'>
        <a href='#' onClick={this.handleAddChildClick}>Add Child</a>
        </li>
        </ul>
        </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return state[ownProps.id]
}

const ConnectedNode = connect(mapStateToProps, actions)(Node)
export default ConnectedNode