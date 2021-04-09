import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderNav from './components/nav/HeaderNav';
import CreateNewPost from './components/BlogForm/CreateNewPost.js';
import PostVew from './components/post/PostVew';
import PostList from './components/post/PostList';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="grid justify-items-center">
        <HeaderNav />
        
      <Switch>
      <Route exact path="/">
        <PostList />
      </Route>
        <Route exact path="/new">
          <CreateNewPost />
        </Route>
        <Route path="/:id">
          <PostVew />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    
    </>
    
  );
}


export default App;
