
import {ADD_POST, DELETE_POST, GET_POSTS} from "../actions/actionTypes";
const INITIAL_VALUE = []


function postsReducer(state=INITIAL_VALUE, action){
    
    switch(action.type){
        case GET_POSTS:
            return [...state, ...action.payload]
        case ADD_POST:
            return [...state, {...action.payload}]
        case DELETE_POST:
            
            const newState = state.filter(({id}) => id != action.id)
            
            return [...newState]
        default:
            return state;
    }
}

export default postsReducer;


// case ADD_POST:
//     return {...state, [uuid()]:{...action.payload}}
// case EDIT_POST:
//     return {...state, [action.id]: {...action.newData}}
// case ADD_COMMENT:
//     console.log("comment")
//     return {...state, [action.id]: {...state[action.id], comments: {...state[action.id].comments, [uuid()]: action.comment}}}
// case  DELETE_POST:
//     delete state[action.id]
//     return {...state}
// case DELETE_COMMENT:
//     const post = state[action.postId]
//     delete post.comments[action.commentId]
//     return {...state}