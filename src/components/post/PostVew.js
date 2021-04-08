import {Link} from 'react-router-dom';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const PostVew = ({data}) => {
    console.log(data)
    return (
        <div className="bg-white  rounded-lg w-3/4">
            <div className="flex  justify-between">
                <h1 className="text-2xl  my-5">{data.posts[0].title}</h1>
                <div className=" my-5 flex flex-row">
                <Link to="/" className="text-blue-500 mx-1" ><FaEdit /></Link>
                <Link to="/" className="text-red-500 mx-1" ><FaTrashAlt /></Link>
                </div>
                
            </div>
            <h3 className="text-base ">{data.posts[0].description}</h3>
            <p className="my-5 ">{data.posts[0].body}</p>
        </div>
    )
}

export default PostVew