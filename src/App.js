import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/index.css';

import Header from './components/header/Header';
import AllCard from './components/AllCard';


function App() {
  return (
    <Router>
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<AllCard />} />
        {/* Добавьте другие маршруты, если необходимо */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
