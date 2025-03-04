import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Steps from './Components/Steps/Steps'
import Footer from './Components/Footer/Footer'
// import About from "./Components/About/About"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Steps/>
      <Footer/>
    </div>
  )
}

export default App
