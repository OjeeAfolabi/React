import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" element={<Home />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
