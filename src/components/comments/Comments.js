import {useState} from 'react';
import {useDispatch} from 'react-redux';

import Comment from './Comment';
import {deleteCommentApi} from '../../actions/thunks';

const Comments = ({handleComment, data, id}) => {

    const [formData, setFormData] = useState('')
    
    const dispatch = useDispatch();

    const handleChange = e => {
        e.preventDefault();
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleComment(id, formData)
        setFormData('')
    }

    const handleDeleteComment = (commentId) => {
        dispatch(deleteCommentApi(id, commentId))
    }
    if(!data){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div className="border-t-2">
            <h1 className="text-2xl font-bold my-3">Comments</h1>
            {data.map(comment => 
                <Comment 
                handleDeleteComment={handleDeleteComment}
                id={comment.id}
                key={comment.id}
                data={comment.text}
                />)}
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                    onChange={handleChange}
                    value={formData}
                    className="border rounder-lg leading-tight focus:outline-none focus:shadow-outline py-2 px-3 mt-2 text-gray-500 shadow appearance-none w-full"
                    type="text" 
                    placeholder="Add Comment"/>
                    <button className="bg-blue-400 mt-3 px-3 py-1 rounded-md">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Comments; 

