import {useSelector} from "react-redux";

import PostCard from './PostCard'

const PostList = () => {
    
    const posts = useSelector(data => ([...data.posts]))
    
    

    return(
        <div className="w-3/4" >
            <h1 className="w-full my-4">Welcome to <b>Microblog</b> our inovativ site for comunicating on the information superhighway</h1>

            <div className="grid grid-cols-2 gap-4">
                {posts.map(post => <PostCard key={post.id} id={post.id} data={post}></PostCard>)}
            </div>
        </div>
    )
}

export default PostList;