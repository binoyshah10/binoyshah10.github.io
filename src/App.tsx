import React from "react";
import "./App.css";
import Page from "./layouts/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/about";
import OurImpact from "./pages/outImpact/ourImpact";
import WhyUs from "./pages/whyUs/whyUs";
import AquaAssist from "./pages/aquaAssist/aquaAssist";
import Empowher from "./pages/empowher/empowher";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Page />}>
            <Route index element={<OurImpact />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/aqua-assist" element={<AquaAssist />} />
            <Route path="/empowher" element={<Empowher />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
