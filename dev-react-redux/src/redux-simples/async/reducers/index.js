import { combineReducers } from 'redux';
import {
	SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
	REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/index';

const selectedSubreddit = ( state = 'reactjs', action ) => {
	switch(action.type){
	case SELECT_SUBREDDIT:
		return action.subreddit;
	default: 
		return state;
	}
};

const posts = (state = {
	isFetching: false,
	didValidate: false,
	items: [],
}, action) => {
	switch (action.type){
	case INVALIDATE_SUBREDDIT:
		return {
			...state,
			didValidate: true
		};
	case REQUEST_POSTS:
		return {
			...state,
			isFetching: true,
			didValidate: false
		};
	case RECEIVE_POSTS:
		return {
			...state,
			isFetching: false,
			didValidate: false,
			items: action.posts,
			lastUpdated: action.receivedAt
		};
	default:
		return state;
	}
};


const postsBySubreddit = (state={}, action) => {
	switch(action.type){
	case INVALIDATE_SUBREDDIT:
	case REQUEST_POSTS:
	case RECEIVE_POSTS:
		return {
			...state,
			[action.subreddit]: posts(state[action.subreddit], action)
		};
	default:
		return state;
	}
};

const rootReducer = combineReducers({
	postsBySubreddit,
	selectedSubreddit
});

export default rootReducer;