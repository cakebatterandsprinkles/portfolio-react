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
                    <Card imgLink={Bootcampspot} text="Bootcampspot"/>
                    <Card imgLink={Pupper} text="Pupper"/>   
                    <Card imgLink={Crystal} text="Crystal Game"/>
                    <Card imgLink={Hogwarts} text="Harry Potter Trivia"/>
                    <Card imgLink={Bird} text="Guess the Bird"/>
                    <Card imgLink={AdventureTime1} text="Adventure Time RPG Game"/>
                    <Card imgLink={LumpySpace} text="GifTastic!"/>
                    <Card imgLink={Railroad} text="Train Scheduler"/>
                    <Card imgLink={Personal} text="Personal Works"/>
                    <Card imgLink={Liribot} text="Liribot"/>
                    <Card imgLink={Bamazon} text="Bamazon"/>
                </div>
            </div>
        );
    }

}

export default Gallery;