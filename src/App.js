import React from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Roadmap from "./pages/roadmap";
import Profile from "./pages/profile";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Heatmap from "./pages/heatmap";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

function App() {
  return (
    <Router>
      <Navbar currentPage={window.location.pathname.slice(1)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livemap" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
