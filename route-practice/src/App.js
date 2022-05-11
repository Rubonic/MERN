
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Hello from './components/Hello';
import Colors from './components/Colors';

function App() {
  return (
    <div className="App container mt-4">
      <BrowserRouter>
        <Switch>
          {/* //home path */}
          <Route exact path="/home">
            <Home></Home>
          </Route>
          {/* //hello & number path */}
          <Route exact path="/:hello">
            <Hello></Hello>
          </Route>
          <Route exact path="/:word/:color1/:color2">
            <Colors></Colors>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;