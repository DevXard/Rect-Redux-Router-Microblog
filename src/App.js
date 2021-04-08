import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderNav from './components/nav/HeaderNav';
import Form from './components/BlogForm/Form';
import CreateNewPost from './components/BlogForm/CreateNewPost.js';
import PostVew from './components/post/PostVew';
import PostList from './components/post/PostList';

function App(props) {
  return (
    <>
    <BrowserRouter>
      <div className="grid justify-items-center">
        <HeaderNav />
        
      <Switch>
      <Route exact path="/">
        <PostList data={props} />
      </Route>
        <Route exact path="/new">
          <CreateNewPost />
        </Route>
        <Route path="/:id">
          <PostVew data={props} />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    
    </>
    
  );
}

App.defaultProps = {
  posts:[
  {
    title: "Why Is the Sky Blue",
    description: "A treatise on color theory",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "Why does the sun shine",
    description: "An examination of phisics",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]}

export default App;
