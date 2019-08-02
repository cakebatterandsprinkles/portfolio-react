import React from 'react';
import './Gallery.css';
import Card from "../Card/Card";
import Hogwarts from "./images/hogwarts.png";
import Cardinal from "./images/cardinal.png";
import AdventureTime1 from "./images/adventuretime-bg.png";
import AdventureTime2 from "./images/adventure-giphy.png";
import Railroad from "./images/railroad.png";
import Liribot from "./images/liribot.jpg";

class Gallery extends React.Component {
    render() {
        return ( <div className="img-container">
        <Card imgLink={Hogwarts}/>
        <Card imgLink={Cardinal}/>
        <Card imgLink={AdventureTime1}/>
        <Card imgLink={AdventureTime2}/>
        <Card imgLink={Railroad}/>
        <Card imgLink={Liribot}/>
        <Card imgLink="https://images.unsplash.com/photo-1422284763110-6d0edd657b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
        <Card imgLink="https://images.unsplash.com/photo-1422284763110-6d0edd657b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
        <Card imgLink="https://images.unsplash.com/photo-1422284763110-6d0edd657b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80"/>
      </div>
    );
    }

}

export default Gallery;