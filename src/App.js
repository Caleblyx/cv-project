import logo from './logo.svg';
import './App.css';
import {CV} from './components/cv.js';
function App() {
  return (
    <div>
      <header>Resume Creator</header>
      <div className="backpage">
        <CV />
      </div>
    </div> 
  );
}

export default App;
