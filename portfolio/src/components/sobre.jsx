import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Sobre.css";
import perfil from "../assets/perfil.jpg";
import profile from "../assets/profile.pdf";
import perfill from "../assets/perfil.jpeg";

function Sobre() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Variants para animação do Framer Motion
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } } // animação sequencial
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="sobre" ref={sectionRef} className="sobre-section">
      <motion.div
        className="sobre-card"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Imagem à esquerda */}
        <motion.div className="sobre-imagem" variants={itemVariants}>
          <img src={perfill} alt="Foto de Lukas Romero" />
        </motion.div>

        {/* Texto à direita */}
        <motion.div className="sobre-texto" variants={itemVariants}>
          <h3 className="sobre-subtitulo">Sobre mim</h3>
          <h2 className="sobre-titulo">Um pouco de mim...</h2>
          <p>
            Oi, pessoal! Meu nome é <strong>Lukas Romero</strong>, sou
            desenvolvedor júnior apaixonado por tecnologia, com foco em{" "}
            <strong>Flutter, React e segurança de aplicações</strong>.
            Atualmente, trabalho na <strong>SUDEMA - Superintendência de Administração do Meio Ambiente</strong>, aplicando
            conhecimentos em projetos reais enquanto continuo estudando para
            aprimorar minhas habilidades.
          </p>
          <p>
          Fora do mundo da programação, sou ativo na <strong>Ordem DeMolay</strong>, onde já ocupei cargos de liderança e participei de projetos
          que reforçam valores como responsabilidade, trabalho em equipe e desenvolvimento pessoal. Essa vivência me ensinou a liderar com empatia
           e a valorizar a colaboração, habilidades que aplico tanto na vida profissional quanto pessoal.
          </p>
          <a href={profile} download="Curriculo-Lukas-Romero.pdf">
            <motion.button className="btn-cv" variants={itemVariants}>
              📄 Meu CV
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sobre;
