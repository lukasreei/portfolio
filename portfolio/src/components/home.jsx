import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css"; 
import perfil from "../assets/perfil.jpg";
import profile from "../assets/profile.pdf";

function Home() {
  return (
    <section className="inicio" id="home">
      <motion.div 
        className="home-content"
        initial={{ opacity: 0, x: -50 }}   // Começa transparente e deslocado
        animate={{ opacity: 1, x: 0 }}     // Anima para visível e posição normal
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="texto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Olá, eu sou Lukas Romero
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Bem-vindo ao meu portfólio! Sou desenvolvedor júnior apaixonado por tecnologia, especialmente mobile e web.
          </motion.p>

          <div className="botoes">
            <motion.a
              href={profile} 
              download="Curriculo-Lukas-Romero.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn">📄 Baixar Currículo</button>
            </motion.a>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn-contato">✉️ Entre em Contato</button>
            </motion.a>
          </div>
        </div>

        <motion.img 
          src={perfil} 
          alt="Foto de Lukas Romero" 
          className="foto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>
    </section>
  );
}

export default Home;
  