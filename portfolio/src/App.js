import Home from './Component/Home';
import Project from './Component/Project';
import Resume from './Component/Resume';
import "./app.css"
function App() {
  return (
    <div className="App">
      <h1> Hi from App</h1>
      <Home />
      <Project />
      <Resume />
    </div>
  );
}

export default App;
