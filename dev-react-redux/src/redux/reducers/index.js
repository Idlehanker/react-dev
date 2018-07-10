import { ADD_ATICAL } from '../constants/action-types';

const inittialState = {
	articals: []
};

const rootReducer = ( state = inittialState, action) => {

	switch( action.type ){

	case ADD_ATICAL:
		return { ...state, articals: [...state.articals, action.payload]};
	}

	return state;
};

export default rootReducer;