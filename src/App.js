import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </main>
  );
}