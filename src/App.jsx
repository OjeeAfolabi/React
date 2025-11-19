import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
