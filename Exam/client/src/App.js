import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPets from './components/AllPets';
import NewPetForm from './components/NewPetForm';
import OnePet from './components/OnePet';
import EditPetForm from './components/EditPetForm';

function App() {

  const [newPetToggle, setNewPetToggle] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
      <h1>Pet Shelter</h1>
      <Switch>
        <Route exact path="/">
          <Link to ="/new">Add A Pet To The Shelter</Link>
          <AllPets newPetToggle= {newPetToggle}></AllPets>
        </Route>
        <Route exact path="/new">
          <Link to ="/">Back To Home</Link>
          <NewPetForm newPetToggle= {newPetToggle} setNewPetToggle= {setNewPetToggle}></NewPetForm>
        </Route>
        <Route exact path="/pets/:_id">
          <Link to ="/">Back To Home</Link>
          <OnePet></OnePet>
        </Route>
        <Route exact path="/edit/:_id">
          <Link to ="/">Back To Home</Link>
          <EditPetForm></EditPetForm>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
