import React from "react";
import Router from "./route";
import Navigation from '../components/navigation';
import Header from '../components/header';

const App = () => (
  <div>
    <Header/>
    <Router />
    <Navigation/>
  </div>
);

export default App;
