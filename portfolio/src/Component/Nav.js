import profile from "./img/icon.png"
import { Link } from "react-router-dom";
import resume from "./img/RaymondLu_Resume.pdf"

function Nav() {
    return (
      <div className="Nav">
        <div className="leftNav">
          <Link to="/"><img src={profile} alt="profile"></img></Link>
          <Link to="/"><p>Raymond Lu</p></Link>
        </div>
        <div className="rightNav">
          <Link to="/project"><p>Projects</p></Link>
          <p><a href={resume} target="#">Resume</a></p>
        </div>
      </div>
    );
}

export default Nav;