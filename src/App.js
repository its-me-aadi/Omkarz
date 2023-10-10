import React from "react";
import Hero from "./screens/hero";
import ServicesAndthings from "./screens/servicesAndthings";
import Footer from "./components/footer";
import Availablecars from "./screens/availablecars";
import './styles/index.css'
import Whychooseus from "./screens/whychooseus";
import Route from "./screens/route";
import Review from "./screens/review";

function App() {
  return (
    <div>
      <Hero/>
      <Availablecars />
      <Whychooseus />
      <Route />
      <Review />
      <ServicesAndthings/>
      <Footer/>
    </div>
  );
}

export default App;
