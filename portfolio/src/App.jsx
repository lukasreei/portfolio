import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
import Home from "./components/home";

function App() {
  return (
    <div>
      <Header />
      <Home></Home>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
