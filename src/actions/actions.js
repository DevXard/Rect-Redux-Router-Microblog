import {ADD_POST, EDIT_POST, ADD_COMMENT, DELETE_COMMENT, DELETE_POST, GET_POSTS, GET_COMMENTS} from './actionTypes';

export function getComments( payload){
    return{
        type:GET_COMMENTS,
        payload
    }
}

export function getPosts(payload){
    return{
        type: GET_POSTS,
        payload
    }
}

export function addPost(payload){
    return{
        type: ADD_POST,
        payload
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

export function deletePost(id){

    return{
        type: DELETE_POST,
        id
    }
}

export function deleteComment(postId, commentId){

    return {
        type: DELETE_COMMENT,
        postId,
        commentId
    }
}