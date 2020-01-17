import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import AllProjects from "./components/AllProjects.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AllProjects />
      </header>
    </div>
  );
}

export default App;
