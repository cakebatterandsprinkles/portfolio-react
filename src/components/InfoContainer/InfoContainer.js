import React from 'react';
import "./InfoContainer.css";

class InfoContainer extends React.Component {
    render() {
        return <div className="mx-auto flex-1 pt-24 px-16 pb-20 text-justify text-gray-800 container font-mono">
                <h1 className="text-4xl text-gray-900 font-bold mb-4">Hello!</h1>
                <p className="text-lg mb-6"> I am Yagmur Cetin Tas, a Florida based Full Stack Web Developer and former neuroscientist. </p>
                <p className="text-lg mb-6">  I hereby declare that all the work here is my own, except the feathers and t-shirt holes, 
                    which have been duly acknowledged.</p> 
                <p className="text-lg">  Reach me at <a href="yagmurcetin@gmail.com" className="underline">yagmurcetin@gmail.com</a>, I would love to hear from you.</p> 
        </div>
    }
}

export default InfoContainer;