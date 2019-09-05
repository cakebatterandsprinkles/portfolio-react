import React from 'react';
import "./Card.css";

class Card extends React.Component {
    render() {
        return <div className="shadow-xl img-wrapper relative inline-block">
            <img
                className="w-full h-full object-cover img-responsive"
                src={this.props.imgLink}
                alt="project"/>
            {/* <div
                className="w-full h-full object-cover invisible hover::visible card-on-hover">
                <p>Demo: {this.props.demoLink}</p>
                <p>Code: {this.props.githubLink}</p>
            </div> */}
            <div className="text-white w-full h-full text-center absolute inset-0 pt-4 md:pt-8">
                <h4 className="project-name text-3xl md:text-4xl">{this.props.text}</h4>
            </div>
        </div>
    }
}

export default Card;