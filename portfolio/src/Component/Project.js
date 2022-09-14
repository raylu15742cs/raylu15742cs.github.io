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
          <div className="descriptionButtons">
            <button onClick={() => {window.open('https://raylu15742cs.github.io/Beluga-Theme-Store/', '_blank');}}> Live Link &#x2192;</button>
            <button onClick={() => {window.open('https://github.com/raylu15742cs/Beluga-Theme-Store', '_blank');}}> Github Repo &#x2192;</button>
          </div>
        </div>
      </div>
      <div className="pokemonCarousel card">
        <div className="description Pokemon">
          <h2>Pokemon Memory Card</h2>
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