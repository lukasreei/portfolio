import React from "react";
import "../styles/header.css";
function Header() {
  return (
    <header>
      <h1>Lukas Santos</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#experiencias">Experiencias</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
