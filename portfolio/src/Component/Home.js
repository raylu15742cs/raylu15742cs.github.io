import profile from "./img/profile.png"
import { Link } from "react-router-dom";
import resume from "./img/RaymondLu_Resume.pdf"
function Home() {
  return (
    <div className="Home">
      <div className="HomeTop">
        <div className="HomeIntroduction">
          <h2> Hello I'm Raymond Lu </h2>
          <h3>I am a front end web developer based in Pasadena, California</h3>
          <div className="HomeButtons">
            <Link to="/project"><button>Projects</button></Link>
            <button><a href={resume} target="#" >Resume</a></button>
          </div>
        </div>
        <img src={profile} alt="profile"></img>
      </div>
      {/*
      <div className="skills">
        <h4>Language</h4>
        <p>Javascript</p>
        <h4>Frameworks</h4>
        <p>React</p>
        <h4>Web Development</h4>
        <p>HTML , CSS , SCSS/SASS</p>
        <h4>Automated Testing</h4>
        <p>Jest, React Testing Library</p>
        <h4>Debugging</h4>
        <p>Debugger , Console</p>
        <h4>APIs</h4>
        <h4>Version Control System</h4>
        <p>Git , Github</p>
        <h4>Command Line / OS</h4>
        <p>Mac , Windows</p>
        <h4>Optimization</h4>
      </div>
  */}
    </div>
  );
}

export default Home;
