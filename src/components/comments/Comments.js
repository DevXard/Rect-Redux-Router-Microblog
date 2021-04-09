import {useState} from 'react';
import {useSelector} from 'react-redux';

import Comment from './Comment';

const Comments = ({handleComment, id}) => {

    const [formData, setFormData] = useState('')
    const comments = useSelector(data => data[id].comments)
    

    const handleChange = e => {
        e.preventDefault();
        setFormData(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleComment(formData)
    }
    return(
        <div className="border-t-2">
            <h1 className="text-2xl font-bold my-3">Comments</h1>
            {comments.map(comment => <Comment data={comment} />)}
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