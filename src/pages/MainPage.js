import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import InfoContainer from '../components/InfoContainer/InfoContainer';
import Slogan from "../components/Slogan/Slogan";
import Navbar from "../components/Navbar/Navbar"
import "./MainPage.css";

class MainPage extends React.Component {
    render() {
        return <div>
            <Navbar/>
            <div className="wrapper">
                <div className="section parallax bg-image">
                    <Slogan/>
                </div>
                <div className="section static">
                    <InfoContainer/>
                </div>
                <div className="section static">
                    <Gallery/>
                </div>
            </div>
        </div>
    }
}

export default MainPage;
