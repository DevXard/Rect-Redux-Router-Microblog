import {Link} from 'react-router-dom';

const PostCard = ({data, id}) => {
        
    return (
        <div className="bg-white shadow mt-3 rounded-lg">
            <Link to={`/${id}`} >
            <h1 className="mx-5 mt-3 text-blue-400">{data.title}</h1>
            </Link>
            <h3 className="mx-5 mb-3 font-serif">{data.description}</h3>
        </div>
    )
}

export default PostCard;