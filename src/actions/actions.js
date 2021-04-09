import {ADD_POST, EDIT_POST, ADD_COMMENT} from './actionTypes';

export function addPost(data){
    return{
        type: ADD_POST,
        payload: data
    }
}

export function editPost(id, newData){
    return{
        type: EDIT_POST,
        id,
        newData
    }
}

export function addComment(id, comment){
    
    return{
        type: ADD_COMMENT,
        id,
        comment
    }
}