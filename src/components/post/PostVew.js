// import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import EditPost from '../BlogForm/EditPost';
import Comments from '../comments/Comments';
import {addComment} from '../../actions/actions';

const PostVew = () => {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();

    const {id} = useParams();
    const post = useSelector(data => data)
    const postData = post[id]

    const handleEdit = e => {
        e.preventDefault();
        setEdit(data => !data)
    }

    const handleComment = (comment) => {
        dispatch(addComment(id, comment))
    }

    if(edit) {
        return(
            <>
            <button onClick={handleEdit}>Back</button>
                <EditPost id={id} edit={postData} />
            </>
        )
    }

    return (
    <div className="bg-white  rounded-lg w-3/4">
        {!postData ? 
        <div>Liading...</div> 
            : 
            <div>
            <div className="flex  justify-between">
                <h1 className="text-2xl  my-5">{postData.title}</h1>
                <div className=" my-5 flex flex-row">
                <button to="/" onClick={handleEdit} className="text-blue-500 mx-1" ><FaEdit /></button>
                <button to="/" className="text-red-500 mx-1" ><FaTrashAlt /></button>
                </div>
                
            </div>
            <h3 className="text-base ">{postData.description}</h3>
            <p className="my-5 ">{postData.body}</p>
            <div>
                <Comments handleComment={handleComment}/>
            </div>
            </div>
            }
     
    </div>
        
    )
}

export default PostVew