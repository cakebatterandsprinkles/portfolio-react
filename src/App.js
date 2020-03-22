import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import ReactGA from "react-ga";


function App() {
  ReactGA.initialize("UA-155746861-1");
  ReactGA.pageview(window.location.pathname);
  return ( < MainPage / > );
}

export default App;