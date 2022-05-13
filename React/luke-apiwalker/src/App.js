import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {
  BrowserRouter,// ENABLES ROUTING
  Switch,
  Route,
  Link
} from "react-router-dom";
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke APIwalker Assignment</h1>
        <Form></Form>
        <Switch>
          <Route exact path = "/:category/:id">
            <Result></Result>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
