import React from "react";
import "../styles/Home.css"; 
import perfil from "../assets/perfil.jpg";
import profile from "../assets/profile.pdf";

function Home() {
  return (
    <section className="inicio" id="home"> {/* id home para linkar no Header */}
      <div className="home-content">
        {/* Texto à esquerda */}
        <div className="texto">
          <h1>Olá, eu sou Lukas Romero</h1>
          <p>
            Bem-vindo ao meu portfólio! Sou desenvolvedor júnior apaixonado por tecnologia, especialmente mobile e web. 
          </p>

          <div className="botoes">
            <a href={profile} download="Curriculo-Lukas-Romero.pdf">
              <button className="btn">📄 Baixar Currículo</button>
            </a>
            <a href="#contact">
              <button className="btn btn-contato">✉️ Entre em Contato</button>
            </a>
          </div>
        </div>

        {/* Imagem à direita */}
        <img src={perfil} alt="Foto de Lukas Romero" className="foto" />
      </div>
    </section>
  );
}

export default Home;
