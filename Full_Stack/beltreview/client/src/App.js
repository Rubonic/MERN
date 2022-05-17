import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllNinjas from './components/AllNinjas';
import NewNinjaForm from './components/NewNinjaForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Wall of Ninjas</h1>
      <Switch>
        <Route exact path="/">
          <NewNinjaForm></NewNinjaForm>
          <hr />
          <AllNinjas></AllNinjas>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
