import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Project from './Component/Project';
import './app.css';
import Footer from './Component/Footer';
import Nav from './Component/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
