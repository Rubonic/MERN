import logo from './logo.svg';
import './App.css';
import Tab from './components/Tabs'

function App() {
  return (
    <div className="App container">
      <h1>Hogwarts Tabs</h1>
      <Tab items={[
        {label: "Gryffindor", content: "Gryffindor House: This house values bravery, daring, nerve, and chivalry. Its emblematic animal was the lion, and its colours were scarlet and gold. This house was founded by Godric Gryffindor! "},
        {label: "Hufflepuff", content: "Hufflepuff House: This house values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal was the badger, and yellow and black were its colors. This house was founded by Helga Hufflepuff!"},
        {label: "Ravenclaw", content: "Ravenclaw House: This house values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal was the eagle, and its colors were blue and bronze. This house was founded by Rowena Ravenclaw!"},]}></Tab>
    </div>
  );
}

export default App;
