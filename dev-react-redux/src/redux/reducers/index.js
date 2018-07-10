import { ADD_ARTICAL } from '../constants/action-types';

const inittialState = {
	articals: []
};

const rootReducer = ( state = inittialState, action) => {

	switch( action.type ){

	case ADD_ARTICAL:
		return { ...state, articals: [...state.articals, action.payload]};
	}

	return state;
};

export default rootReducer;