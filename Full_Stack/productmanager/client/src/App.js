import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

function App() {

  const [newProductToggle, setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <Link to ="/new">Add A New Product</Link>
          <AllProducts newProductToggle= {newProductToggle}></AllProducts>
        </Route>
        <Route exact path="/new">
          <Link to ="/">Home</Link>
          <NewProductForm newProductToggle= {newProductToggle} setNewProductToggle= {setNewProductToggle}></NewProductForm>
        </Route>
        <Route exact path="/products/:_id">
          <OneProduct></OneProduct>
        </Route>
        <Route exact path="/edit/:_id">
          <EditProductForm></EditProductForm>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
