import uuid from 'react-uuid';
import {ADD_POST, EDIT_POST, ADD_COMMENT} from "../actions/actionTypes";
const INITIAL_VALUE = {}


function rootReducer(state=INITIAL_VALUE, action){
    console.log(state)
    switch(action.type){
        case ADD_POST:
            return {...state, [uuid()]:{...action.payload}}
        case EDIT_POST:
            
            return {...state, [action.id]: {...action.newData}}
        case ADD_COMMENT:
            console.log("comment")
            return {...state, [action.id]: {...state[action.id], comments: [...state[action.id].comments, action.comment]}}
        default:
            return state;
    }
}

export default rootReducer;