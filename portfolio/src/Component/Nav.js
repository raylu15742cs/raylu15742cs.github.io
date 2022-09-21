import profile from "./img/icon.png"
import { Link } from "react-router-dom";
import resume from "./img/RaymondLu_Resume.pdf"

function Nav() {
    return (
      <div className="Nav">
        <div className="leftNav">
          <Link to="/"><img src={profile} alt="profile"></img></Link>
          <Link to="/"><p className="links">Raymond Lu</p></Link>
        </div>
        <div className="rightNav">
          <Link to="/project"><p className="links">Projects</p></Link>
          <a href={resume} target="#"><p className="links">Resume</p></a>
        </div>
      </div>
    );
}

export default Nav;