import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>Dojo Diner</h1>
      <Menu name = {"Calamari"} price = {9} calories = {700}>
        <p><em>Originates from Turkey, Greece, Italy and Spain</em></p>
      </Menu>
      <Menu name = {"Chicken"} price = {20} calories = {900}>
      <p><em>Originates from Southeast Asia</em></p>
      </Menu>
      <Menu name = {"Crab"} price = {16} calories = {750}>
      <p><em>Originates from Britain</em></p>
      </Menu>
      <Menu name = {"Tuna"} price = {5} calories = {400}>
      <p><em>Originates from Japan and Pacific Islands</em></p>
      </Menu>
    </div>
  );
}

export default App;
