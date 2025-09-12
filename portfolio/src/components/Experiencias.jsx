import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Experiencias.css";

const experiencias = [
  {
    id: 1,
    cargo: "Desenvolvedor de Software Júnior",
    empresa: "SUDEMA - Superintendência de Administração do Meio Ambiente",
    periodo: "Abril 2025 - Atual",
    descricao: "Desenvolvimento de aplicações mobile e web."
  },
  {
    id: 2,
    cargo: "Desenvolvedor de aplicativos móveis",
    empresa: "Ubtech",
    periodo: "Agosto 2024 - Abril 2025",
    descricao: "Desenvolvimento de aplicações mobile"
  },
  
];

function Experiencias() {
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
    <section className="experiencias" ref={sectionRef} id="experiencias">
      <h2>💼 Experiência</h2>
      <div className="timeline">
        {experiencias.map((exp, i) => (
          <motion.div
            key={exp.id}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="timeline-content">
              <h3>{exp.empresa}</h3>
              <h4>{exp.cargo}</h4>
              <p>{exp.periodo}</p>
              <p>{exp.descricao}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiencias;
