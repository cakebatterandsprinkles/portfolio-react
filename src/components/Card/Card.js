import React from 'react';
import "./Card.css";

class Card extends React.Component {
    render() {
        return <div className="shadow-xl img-wrapper">
                <img className="w-full h-full object-cover" src={this.props.imgLink} alt="project"/>
            </div>
    }
}

export default Card;