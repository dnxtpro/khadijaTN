import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";

const Ruteo = () => {
  return (
    <Router>
     <>
     <Route exact path="/" render={() => <App />} />
     
     
     </>
    </Router>
  );
};

export default Ruteo;