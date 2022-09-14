import profile from "./img/profile.png"
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div className="Nav">
        <div className="leftNav">
          <Link to="/"><img src={profile} alt="profile"></img></Link>
          <Link to="/"><p>Raymond Lu</p></Link>
        </div>
        <div className="rightNav">
          <Link to="/project"><p>Projects</p></Link>
          <Link to="/experience"><p>Experience</p></Link>
        </div>
      </div>
    );
}

export default Nav;