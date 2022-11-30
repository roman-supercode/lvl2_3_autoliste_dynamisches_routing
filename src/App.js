import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/main/Home';
import Info from './components/info/Info';
import Navigation from './components/nav/Navigation';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
