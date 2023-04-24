import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Features from "../Features/Features";
import Services from "../Services/Services";
import ClientTestimonials from "../ClientTestimonials/ClientTestimonials";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Services />
      <ClientTestimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
