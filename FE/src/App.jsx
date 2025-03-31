import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContactPage from "./components/ContactPage";
import ServiceCard from "./components/ServiceCard";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
