// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import StagePage from './pages/stage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stage" element={<StagePage />} />
      </Routes>
    </Router>
  );
}

export default App;

