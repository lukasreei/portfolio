import React, { useEffect, useRef, useState } from "react";
import "../styles/Sobre.css";
import perfil from "../assets/perfil.jpg"; // sua foto
import profile from "../assets/profile.pdf"; // seu currículo

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

  return (
    <section
  id="sobre"
  ref={sectionRef}
  className={`sobre-section fade-in-section ${isVisible ? "is-visible" : ""}`}
>
  <div className="sobre-card">
    {/* Imagem à esquerda */}
    <div className="sobre-imagem">
      <img src={perfil} alt="Foto de Lukas Romero" />
    </div>

    {/* Texto à direita */}
    <div className="sobre-texto">
      <h3 className="sobre-subtitulo">Sobre mim</h3>
      <h2 className="sobre-titulo">Um pouco de mim...</h2>
      <p>
        Oi, pessoal! Meu nome é <strong>Lukas Romero</strong>, sou
        desenvolvedor júnior apaixonado por tecnologia, com foco em{" "}
        <strong>Flutter, React e segurança de aplicações</strong>.
        Atualmente, trabalho na <strong>SUDEMA</strong>, aplicando
        conhecimentos em projetos reais enquanto continuo estudando para
        aprimorar minhas habilidades.
      </p>
      <p>
        Além de programar, gosto de compartilhar conhecimento, aprender novas
        tecnologias e enfrentar desafios que me ajudam a crescer
        profissionalmente. Nos momentos de lazer, gosto de um bom livro, de
        música e de jogos 🎮.
      </p>
      <a href={profile} download="Curriculo-Lukas-Romero.pdf">
        <button className="btn-cv">📄 Meu CV</button>
      </a>
    </div>
  </div>
</section>

  );
}

export default Sobre;
