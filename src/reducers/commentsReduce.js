import {GET_COMMENTS} from '../actions/actionTypes';
const INITIAL_STATE = {}

function withCommentsReducer(state=INITIAL_STATE, action) {
    console.log("COMMENTS", state)
    switch(action.type) {
        case GET_COMMENTS:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export default withCommentsReducer;