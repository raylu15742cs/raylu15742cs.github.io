import React from "react";
import Carousel from "better-react-carousel";
import beluga1 from './img/beluga1.png';
import beluga2 from './img/beluga2.jpg';
import beluga3 from './img/beluga3.png';
import battleship2 from './img/battleship3.png';
import battleship3 from './img/battleship2.png';
import battleship1 from './img/battleship1.jpg';
import pokemon1 from './img/Pokemon1.png';
import pokemon2 from './img/pokemon2.png';
import pokemon3 from './img/Pokemon3.png';

function Project() {
  return (
    <div className="Project">
      <h1> PROJECTS</h1>
      <div className="belugaCarousel card">
        <Carousel class="carousel" cols={1} rows={1} loop>
          <Carousel.Item>
            <img src={beluga1} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={beluga2} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={beluga3} alt="hi" />
          </Carousel.Item>
        </Carousel>
        <div className="description beluga">
          <h2> Yeezy Beluga Themed Store</h2>
          <div className="descriptionInside">
            <h3>About</h3>
            <p>This project was created to replicate that of a fully functional eccomerce store. I choose the Yeezy Beluga 350 V2 because of its history and design. This shoe was released in 2016 as the first 350 v2 with that beautiful orange stripe that makes the wearer of this piece stand out </p>
            <h3>Creation</h3>
            <p>Developed a React Application, that replicates all of the functionality of a themed eccomerce website. This project was built using routers, hooks, and functions components. It is published on github pages using hashrouters </p>
            <h3>Technologies</h3>
            <div className="Technologies">
              <p>React</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <div className="descriptionButtons">
            <button onClick={() => {window.open('https://raylu15742cs.github.io/Beluga-Theme-Store/', '_blank');}}> Live Link &#x2192;</button>
            <button onClick={() => {window.open('https://github.com/raylu15742cs/Beluga-Theme-Store', '_blank');}}> Github Repo &#x2192;</button>
          </div>
        </div>
      </div>
      <div className="pokemonCarousel card">
        <div className="description Pokemon">
          <h2>Pokemon Memory Card</h2>
          <h3>About</h3>
          <p>Fact 1</p>
          <p> Fact 2</p>
          <p> Fact 3</p>
          <h3>Technologies</h3>
          <div className="Technologies">
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className="descriptionButtons">
            <button onClick={() => {window.open('https://raylu15742cs.github.io/Pokemon-Memory-Game/', '_blank');}}> Live Link &#x2192;</button>
            <button onClick={() => {window.open('https://github.com/raylu15742cs/Pokemon-Memory-Game', '_blank');}}> Github Repo &#x2192;</button>
          </div>
        </div>
        <Carousel class="carousel" cols={1} rows={1} loop>
          <Carousel.Item>
            <img src={pokemon1} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pokemon2} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pokemon3} alt="hi" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="battleshipCarousel card">
        <Carousel class="carousel" cols={1} rows={1} loop>
          <Carousel.Item>
            <img src={battleship1} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={battleship2} alt="hi" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={battleship3} alt="hi" />
          </Carousel.Item>
        </Carousel>
        <div className="description battleship">
          <h2>Battleship</h2>
          <h3>About</h3>
          <p>Fact 1</p>
          <p> Fact 2</p>
          <p> Fact 3</p>
          <h3>Technologies</h3>
          <div className="Technologies">
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
          </div>
          <div className="descriptionButtons">
            <button onClick={() => {window.open('https://raylu15742cs.github.io/Battleship-Game/', '_blank');}}> Live Link &#x2192;</button>
            <button onClick={() => {window.open('https://github.com/raylu15742cs/Battleship-Game', '_blank');}}> Github Repo &#x2192;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;