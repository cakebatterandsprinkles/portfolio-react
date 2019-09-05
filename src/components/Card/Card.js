import React from 'react';
import "./Card.css";

class Card extends React.Component {
    render() {
        return <div
            className="shadow-xl img-wrapper relative inline-block"
            id="project-wrapper">
            <img
                className="w-full h-full object-cover img-responsive"
                src={this.props.imgLink}
                alt="project"/>
            <div
                className="w-full h-full absolute inset-0 bg-gray-800 opacity-100 project-links">
                <div className="mt-48 px-4">
                    <div className="flex flex-col text-center mb-8">
                        <p className="text-white bold text-2xl">
                            <i className="fas fa-heart text-red-400 "></i> Demo:
                        </p>
                        <div className="text-white w-full hover:text-pink-600">
                            <a href={this.props.demoLink}>{this.props.demoLink}</a>
                        </div>
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-white bold text-2xl">
                            <i className="fab fa-github"></i> Code:
                        </p>
                        <div className="text-white w-full hover:text-pink-600">
                            <a href={this.props.githubLink}>{this.props.githubLink}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="text-white w-full h-0 text-center absolute inset-0 pt-4 md:pt-8">
                <div>
                    <h4 className="project-name text-3xl md:text-4xl">{this.props.text}</h4>
                </div>
            </div>
        </div>
    }
}

export default Card;
