import {useDispatch} from 'react-redux';

import { addPost} from '../../actions/actions';
import Form from './Form';

const CreateNewPost = () => {

    const dispatch = useDispatch();
    const handleAddPost = (data) => dispatch(addPost(data))
    return(
        <Form handleAddPost={handleAddPost} />
    )
}

export default CreateNewPost;