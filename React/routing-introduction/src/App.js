import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,//this will enable routing for the application (otherwise the routing features will not work)
  Switch,//switch lets us determine which components/elements need to show up only at certain routes
  Route,//route lets us specify the route url address for an element to show up in
  Link,//link is just like an a href (anchor tag) but it will not reload the page
} from "react-router-dom";
import About from './components/About';
import Characters from './components/Characters';
import Houses from './components/Houses';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <h1>Routing Demo</h1>
          <ul id="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/houses">Houses</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/characters">
            <Characters></Characters>
          </Route>
          <Route exact path="/houses">
            <Houses></Houses>
          </Route>

  {/***************Dynamic Routing Start*************************/}
          <Route exact path="/houses/:id"> 
            <Houses></Houses>
          </Route>
          <Route exact path="/houses/:id/:color"> 
            <Houses></Houses>
          </Route>
  {/***************Dynamic Routing End**************************/}
  
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
