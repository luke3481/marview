import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Roadmap from "./pages/roadmap";
import Profile from "./pages/profile";
import Product from "./pages/product";
import Contact from "./pages/contact";
import NavChart from "./pages/navchart";
import HeatMap from "./pages/heatmap";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livemap" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/navchart" element={<NavChart />} />
        <Route path="/heatmap" element={<HeatMap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
