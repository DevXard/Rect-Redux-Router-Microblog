import Form from './Form';
import {editExsistingPost} from '../../actions/thunks';
import {useDispatch} from 'react-redux';

const CreateNewPost = ({edit, id}) => {
    const dispatch = useDispatch();

    const handleEdit = (newData) => {
        dispatch(editExsistingPost(id, newData))
    }
    return(
        <Form edit={edit} handleEdit={handleEdit} />
    )
}

export default CreateNewPost;