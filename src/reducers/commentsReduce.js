import {GET_COMMENTS, EDIT_POST, DELETE_POST, ADD_COMMENT} from '../actions/actionTypes';
const INITIAL_STATE = {}

function withCommentsReducer(state=INITIAL_STATE, action) {
    // console.log("COMMENTS", state)
    switch(action.type) {
        case GET_COMMENTS:
            return {...state, ...action.payload}
        case ADD_COMMENT:
            
            state.comments = [...state.comments, {...action.payload}]
            return {...state}
        case EDIT_POST:
            return {...state, ...action.payload}
        case DELETE_POST:
            delete state[action.id]
            return {...state}
        default:
            return {...state}
    }
}

export default withCommentsReducer;