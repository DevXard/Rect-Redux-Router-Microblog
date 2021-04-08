import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderNav from './components/nav/HeaderNav';
import Form from './components/BlogForm/Form';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="grid justify-items-center">
        <HeaderNav />
     
      <Switch>
        <Route exact path="/new">
          <Form />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
