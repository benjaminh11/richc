import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactPage from "./components/Contact/ContactPage";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer";
import ServiceCard from "./components/Services/ServiceCard";
import ContactForm from "./components/Contact/ContactForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
