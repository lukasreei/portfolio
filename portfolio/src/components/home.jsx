import React from "react";
import "../styles/Home.css"; // seu CSS separado
import perfil from "../assets/perfil.jpg";
import profile from "../assets/profile.pdf"


function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <img src={perfil} alt="Foto de Lukas Romero" className="foto" />

        <div className="texto">
          <h1>Olá, eu sou Lukas Romero</h1>
          <p>
            Sou desenvolvedor júnior apaixonado por mobile e web. Atualmente
            trabalho na SUDEMA e também estudo Flutter, React e segurança de
            aplicações.
          </p>
          <a href={profile} download="Curriculo-Lukas-Romero.pdf">
            <button className="btn">📄 Baixar Currículo</button>
          </a>
          <a href="#contact">
              <button className="btn btn-contato">✉️ Entre em Contato</button>
            </a>

        </div>
      </div>
    </section>
  );
}

export default Home;
