import React from 'react';
import "./InfoContainer.css";

class InfoContainer extends React.Component {
    render() {
        return <div className="mx-auto flex-1 pt-20 px-16 pb-64 text-justify text-gray-800 container font-mono">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-bold mb-4">Hello!</h1>
                <p className="text-sm sm:text-base md:text-lg mb-6"> I am Yagmur Cetin Tas, a Florida based Full Stack Web Developer and former neuroscientist. </p>
                <p className="text-sm sm:text-base md:text-lg mb-6">  I hereby declare that all the work here is my own, except the feathers and t-shirt holes, 
                    which have been duly acknowledged.</p> 
                <p className="text-sm sm:text-base md:text-lg mb-6">  Reach me at <a href="mailto:yagmurcetin@gmail.com?subject=Hi Yagmur! Loved your portfolio!" className="underline hover:text-purple-600">yagmurcetin@gmail.com</a>, I would love to hear from you.</p>
                <p className="text-sm sm:text-base hover:text-pink-600"><i className="fab fa-github text-lg sm:text-2xl"></i> <a href="https://github.com/cakebatterandsprinkles">https://github.com/cakebatterandsprinkles</a></p>
                <p className="text-sm sm:text-base hover:text-pink-600"><i className="fab fa-linkedin text-lg sm:text-2xl"></i> <a href="https://www.linkedin.com/in/yagmur-cetin-tas/">https://www.linkedin.com/in/yagmur-cetin-tas/</a></p>
        </div>
    }
}

export default InfoContainer;