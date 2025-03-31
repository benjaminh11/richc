import { Routes } from "react-router"
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="services-section">
        <h2>Our Services</h2>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
