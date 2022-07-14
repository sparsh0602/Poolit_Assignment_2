import './App.css';
import LoginPage from './components/LoginPage/LoginPage'
import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
 
        <div className="App">
          <Routes>
          <Route exact path="/" element={<LoginPage/>}/>
          <Route exact path="/home" element={<HomePage/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
