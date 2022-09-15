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
            <Link to="/project">
              <button>Projects</button>
            </Link>
            <button>
              <a href={resume} target="#">
                Resume
              </a>
            </button>
          </div>
        </div>
        <img src={profile} alt="profile"></img>
      </div>
    </div>
  );
}

export default Home;
