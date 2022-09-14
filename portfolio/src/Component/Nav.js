import profile from "./img/profile.png"

function Nav() {
    return (
      <div className="Nav">
        <div className="leftNav">
          <img src={profile} alt="profile"></img>
          <p>Raymond Lu</p>
        </div>
        <div className="rightNav">
          <p>Projects</p>
          <p>Experience</p>
        </div>
      </div>
    );
}

export default Nav;