import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";
import {
  createBrowserHistory
} from "history";
import ReactGA from "react-ga";

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({
    page: location.pathname
  });
  ReactGA.pageview(location.pathname);
});

function App() {
  ReactGA.initialize("UA-155746861-1");
  return ( < MainPage / > );
}

export default App;