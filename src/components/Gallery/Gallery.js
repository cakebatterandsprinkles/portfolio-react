import React from 'react';
import './Gallery.css';
import Card from "../Card/Card";
import Bootcampspot from "./images/coding-blackbg.png";
import Pupper from "./images/pupper.jpg";
import Crystal from "./images/crystal.png";
import Hogwarts from "./images/hogwarts.png";
import Bird from "./images/guessbird.jpg";
import AdventureTime1 from "./images/adventuretime-bg.png";
import LumpySpace from "./images/lumpyspace.jpg";
import Railroad from "./images/train.jpg";
import Personal from "./images/personal.jpg";
import Bamazon from "./images/bamazon-01.png";
import Liribot from "./images/liribot.jpg";

class Gallery extends React.Component {
    render() {
        return (
            <div>
                <div className="flex justify-center w-full text-4xl bold text-gray-800 font-mono pb-8" id="works">
                    <p>My Works</p>
                </div>
                <div className="img-container">
                    <Card imgLink={Bootcampspot} text="Bootcampspot" demoLink="https://thebootcampspot.herokuapp.com" githubLink="https://github.com/cakebatterandsprinkles/bootcampspot"/>
                    <Card imgLink={Pupper} text="Pupper" demoLink="https://cakebatterandsprinkles.github.io/Pupper/" githubLink="https://github.com/cakebatterandsprinkles/Pupper"/>   
                    <Card imgLink={Crystal} text="Crystal Game" demoLink="https://cakebatterandsprinkles.github.io/Unit-4-game/" githubLink="https://github.com/cakebatterandsprinkles/Unit-4-game"/>
                    <Card imgLink={Hogwarts} text="Harry Potter Trivia" demoLink="https://cakebatterandsprinkles.github.io/harry-potter-trivia-hard/" githubLink="https://github.com/cakebatterandsprinkles/harry-potter-trivia-hard"/>
                    <Card imgLink={Bird} text="Guess the Bird" demoLink="https://cakebatterandsprinkles.github.io/Word-Guess-Game/" githubLink="https://github.com/cakebatterandsprinkles/Word-Guess-Game"/>
                    <Card imgLink={AdventureTime1} text="Adventure Time RPG Game" demoLink="https://cakebatterandsprinkles.github.io/adventure-time-RPG-game/" githubLink="https://github.com/cakebatterandsprinkles/adventure-time-RPG-game"/>
                    <Card imgLink={LumpySpace} text="GifTastic!" demoLink="https://cakebatterandsprinkles.github.io/GifTastic/" githubLink="https://github.com/cakebatterandsprinkles/GifTastic"/>
                    <Card imgLink={Railroad} text="Train Scheduler" demoLink="https://cakebatterandsprinkles.github.io/train-scheduler/" githubLink="https://github.com/cakebatterandsprinkles/train-scheduler"/>
                    <Card imgLink={Personal} text="Portfolio Design" demoLink="https://www.yagmurcetintas.com" githubLink="https://github.com/cakebatterandsprinkles/portfolio-react"/>
                    <Card imgLink={Liribot} text="Liribot" demoLink="No link available" githubLink="https://github.com/cakebatterandsprinkles/LIRIBOT"/>
                    <Card imgLink={Bamazon} text="Bamazon" demoLink="No link available" githubLink="https://github.com/cakebatterandsprinkles/bamazon_customer_view"/>
                </div>
            </div>
        );
    }

}

export default Gallery;