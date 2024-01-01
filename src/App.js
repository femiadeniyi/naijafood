import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeadlineCard from "./Components/HeadlineCard";
import Food from "./Components/Food";
import Category from "./Components/Category";
function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <HeadlineCard/>
       <Food/>
       <Category/>
    </div>
  );
}

export default App;
