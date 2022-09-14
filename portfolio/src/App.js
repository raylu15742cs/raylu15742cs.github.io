import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Project from './Component/Project';
import Experience from './Component/Experience';
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
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
