import React from 'react';
import './Slogan.css';

class Slogan extends React.Component {
    render(){
        return  <div className="flex items-center justify-center h-full slogan-text">
        <h1 className="text-3xl md:text-4xl xl:text-5xl text-white pb-2">Ahoy! I be a Web DevelopArr!</h1>
        </div>
    }
}

export default Slogan;