import React from 'react';
import './Slogan.css';

class Slogan extends React.Component {
    render(){
        return  <div className="flex items-center justify-center h-full">
        <h1 className=" text-xl sm:text-2xl md:text-4xl xl:text-5xl text-white font-bold pb-2 font-mono">Ahoy! I be a Web DevelopArr!</h1>
        </div>
    }
}

export default Slogan;