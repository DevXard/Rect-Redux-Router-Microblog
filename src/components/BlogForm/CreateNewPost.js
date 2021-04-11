import {useDispatch} from 'react-redux';

import { addNewPost} from '../../actions/thunks';
import Form from './Form';

const CreateNewPost = () => {

    const dispatch = useDispatch();
    const handleAddPost = (data) => dispatch(addNewPost(data))
    return(
        <Form handleAddPost={handleAddPost} />
    )
}

export default CreateNewPost;