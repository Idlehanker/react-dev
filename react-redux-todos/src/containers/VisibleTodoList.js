import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'

const getVisibleTodos = ( todos , filter) => {
	switch(filter){
	case 'SHOW_COMPLETED':
		return todos.filter( t=> t.completed)
	case 'SHOW_ACTIVIE':
		return todos.filter( t => !t.completed)
	case 'SHOW_ALL':
		return todos
	
	default:
		throw new Error('Unkown filter: '+ filter)
	}
}

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: id => {
			dispatch(toggleTodo(id))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

