import React from "react";
import "./App.css";
import Page from "./layouts/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<Home />} />
            <Route path="/about"  element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
