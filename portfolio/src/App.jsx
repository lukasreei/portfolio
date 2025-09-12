import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Home from "./components/home";
import sobre from "./components/sobre";
import Sobre from "./components/sobre";
import Projetos from "./components/projetos";
import Experiencias from "./components/Experiencias";

function App() {
  return (
    <div>
      <Header />
      <Home></Home>
      <Sobre />
      <Projetos/>
      <Experiencias/>
      <Footer />
    </div>
  );
}

export default App;
