import {useSelector} from "react-redux";

import PostCard from './PostCard'

const PostList = () => {
    
    const posts = useSelector(data => ({...data}))
    

    return(
        <div className="w-3/4" >
            <h1 className="w-full my-4">Welcome to <b>Microblog</b> our inovativ site for comunicating on the information superhighway</h1>

            <div className="grid grid-cols-2 gap-4">
                {Object.keys(posts).map(id => <PostCard key={id} id={id} data={posts[id]}></PostCard>)}
            </div>
        </div>
    )
}

export default PostList;