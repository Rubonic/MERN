import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
// import PokemonWithAxios from './components/PokemonWithAxios';

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <Pokemon></Pokemon>
      {/* <PokemonWithAxios></PokemonWithAxios> */}
    </div>
  );
}

export default App;
