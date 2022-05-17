import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Product Manager</h1>
      <Switch>
        <Route>
          <NewProductForm></NewProductForm>
          <hr />
          <AllProducts></AllProducts>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
