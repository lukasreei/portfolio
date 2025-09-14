import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h1>Lukas Santos</h1>

      {/* Botão hambúrguer */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <nav className={menuOpen ? "open" : ""}>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#experiencias">Experiências</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
