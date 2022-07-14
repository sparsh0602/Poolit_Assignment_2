import './App.css';
import './App2.css'
import Navbar from './components/Navbar';
import Game from './components/Game';


function App() {
  return (
    <div>
      <Navbar title="Simon Game"/>
      <Game/>
    </div>
  );
}

export default App;
