import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import OneAuthor from './components/OneAuthor';
import EditAuthorForm from './components/EditAuthorForm';

function App() {

  const [newAuthorToggle, setNewAuthorToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Link to ="/new">Add an author</Link>
          <AllAuthors newAuthorToggle= {newAuthorToggle}></AllAuthors>
        </Route>
        <Route exact path="/new">
          <Link to ="/">Home</Link>
          <NewAuthorForm newAuthorToggle= {newAuthorToggle} setNewAuthorToggle= {setNewAuthorToggle}></NewAuthorForm>
        </Route>
        <Route exact path="/authors/:_id">
          <OneAuthor></OneAuthor>
        </Route>
        <Route exact path="/edit/:_id">
          <Link to ="/">Home</Link>
          <EditAuthorForm></EditAuthorForm>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

