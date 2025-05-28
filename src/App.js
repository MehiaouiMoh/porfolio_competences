import logo from './logo.svg';
import './App.css';

//import de composants

import Navbar from './composants/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
