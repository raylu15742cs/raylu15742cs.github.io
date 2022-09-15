import profile from "./img/profile.png"

function Home() {
  return (
    <div className="Home">
      <div className="HomeTop">
        <div className="HomeIntroduction">
          <h2> Hello I'm Raymond Lu </h2>
          <h3>I am a  front end web developer based in Pasadena, California</h3>
        </div>
        <img src={profile} alt="profile"></img>
      </div>
    </div>
  );
}

export default Home;
