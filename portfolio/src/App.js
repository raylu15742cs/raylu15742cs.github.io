import Home from './Component/Home';
import Project from './Component/Project';
import Resume from './Component/Resume';
import "./app.css"
import Footer from './Component/Footer';
import Nav from './Component/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
