import Form from './Form';
import {editPost} from '../../actions/actions';
import {useDispatch} from 'react-redux';

const CreateNewPost = ({edit, id}) => {
    const dispatch = useDispatch();

    const handleEdit = (newData) => {
        dispatch(editPost(id, newData))
    }
    return(
        <Form edit={edit} handleEdit={handleEdit} />
    )
}

export default CreateNewPost;