import * as types from './types'
{
    type : types.FETCH_NEW_TIME
    payload : new Date().toString()
}

export const initialState = {
    currentTime: new Date().toString()
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_NEW_TIME:
            return {
                ...state,
                currentTime: action.payload
            }

        default:
            return state
    }
    return state
}

export default rootReducer
