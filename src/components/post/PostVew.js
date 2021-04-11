// import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import EditPost from '../BlogForm/EditPost';
import Comments from '../comments/Comments';
import { deletePostApi, fetchWithComments, addCommentApi} from '../../actions/thunks';


const PostVew = () => {
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();

    useEffect(() =>{
        dispatch(fetchWithComments(id))
    },[id, dispatch])

    
    const postData = useSelector(data => data.comments)
    // console.log(postData)
    const handleEdit = e => {
        e.preventDefault();
        setEdit(data => !data)
    }

    const handleComment = (id, comment) => {
        
        dispatch(addCommentApi(id, comment))
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePostApi(id))
        history.push("/")
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
                <button  onClick={handleEdit} className="text-blue-500 mx-1" ><FaEdit /></button>
                <button onClick={handleDelete} className="text-red-500 mx-1" ><FaTrashAlt /></button>
                </div>
                
            </div>
            <h3 className="text-base ">{postData.description}</h3>
            <p className="my-5 ">{postData.body}</p>
            <div>
                <Comments id={id} data={postData.comments} handleComment={handleComment}/>
            </div>
            </div>
            }
     
    </div>
        
    )
}

export default PostVew