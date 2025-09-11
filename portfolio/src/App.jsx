import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Home from "./components/home";
import sobre from "./components/sobre";
import Sobre from "./components/sobre";

function App() {
  return (
    <div>
      <Header />
      <Home></Home>
      <Sobre />
      <Footer />
    </div>
  );
}

export default App;
