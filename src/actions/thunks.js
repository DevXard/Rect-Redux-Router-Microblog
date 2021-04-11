import axios from 'axios';
import {getPosts} from './actions'

const baseUrl = "http://localhost:5000"

export function fetchPosts () {
    return async function (dispatch) {
        try {
            let res = await axios.get(`${baseUrl}/api/posts`)
            console.log(res)
            dispatch(getPosts(res.data))
        }catch (e) {
            console.log(e)
        }
    }
}