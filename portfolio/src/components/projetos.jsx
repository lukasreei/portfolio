import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"; 
import "../styles/Projetos.css";
import bazarImg from "../assets/bazar.png";
import Sudema from "../assets/mocksudema.jpeg";

const projetos = [
  {
    id: 1,
    titulo: "Sudema +",
    descricao: "Sudema+: serviços, noticias e sustentabilidade ao seu alcance",
    imagem: Sudema,
    link: "#",
    emConstrucao: true
  },
  {
    id: 1,
    titulo: "Bazar DeMolay",
    descricao: "Projeto React do bazar criado para o Capítulo DeMolay.",
    imagem: bazarImg,
    link: "https://lukasreei.github.io/bazarhq",
    emConstrucao: false
  },
  {
    id: 3,
    titulo: "Ibico",
    descricao: "",
    imagem: "https://via.placeholder.com/320x200",
    link: "#",
    emConstrucao: true
  },
  {
    id: 4,
    titulo: "Nutri Brasil",
    descricao: "",
    imagem: "https://via.placeholder.com/320x200",
    link: "#",
    emConstrucao: true
  }
];

function Projetos() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <h2>
        💻 Meus <span className="destaque">Projetos</span>
      </h2>
      <div className="cards-container">
        {projetos.map((proj, i) => (
          <motion.div
            key={proj.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ scale: 1.08, boxShadow: "0px 12px 24px rgba(0,0,0,0.25)" }}
          >
            <div className="card-img-wrapper">
              <img src={proj.imagem} alt={proj.titulo} />
              {proj.emConstrucao && (
                <div className="faixa-construcao">🚧 Em Construção</div>
              )}
            </div>
            <div className="card-conteudo">
              {proj.descricao ? (
                <>
                  <h3>{proj.titulo}</h3>
                  <p>{proj.descricao}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Ver Projeto
                  </a>
                </>
              ) : (
                <div className="faixa">
                  <span>{proj.titulo}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
