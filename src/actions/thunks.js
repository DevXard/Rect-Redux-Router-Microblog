import axios from 'axios';
import {getPosts, getComments,addPost} from './actions'

const baseUrl = "http://localhost:5000"

export function fetchPosts () {
    return async function (dispatch) {
        try {
            let res = await axios.get(`${baseUrl}/api/posts`)
            dispatch(getPosts(res.data))
        }catch (e) {
            console.log(e)
        }
    }
}

export function fetchWithComments (id) {
    return async function (dispatch) {
        try {
            let res = await axios.get(`${baseUrl}/api/posts/${id}`)
            console.log(res)
            dispatch(getComments(res.data))
        }catch (e) {
            console.log(e)
        }
    }
}

export function addNewPost (data) {
    return async function (dispatch) {
        try {
            const res = await axios.post(`${baseUrl}/api/posts`, data)
            dispatch(addPost(res.data))
        }catch (e){
            console.log(e)
        }
    }
}