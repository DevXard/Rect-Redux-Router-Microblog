import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import commentsReduce from './commentsReduce';

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReduce
})

export default rootReducer;