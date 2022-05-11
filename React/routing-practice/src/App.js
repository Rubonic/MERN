import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Hello from './components/Hello';
import HelloColors from './components/HelloColors';

function App() {
  return (
    <div className="App container mt-4">
      <BrowserRouter>
        <Switch>
          {/* //home path */}
          <Route exact path="/home">
            <Home />
          </Route>
          {/* //hello & number path */}
          <Route exact path="/:hello">
            <Hello />
          </Route>
          <Route exact path="/:word/:color1/:color2">
            <HelloColors />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;