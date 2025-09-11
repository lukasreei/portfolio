import React, { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para um backend ou serviço de email
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada! Obrigado.");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
 
  <p className="contact-msg">Gostou do meu trabalho? Entre em contato</p>
  
  <div className="social-icons">
    <a href="https://github.com/lukasreei" target="_blank" rel="noopener noreferrer">
      <img src="/icons/github.png" alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/lukas-romerodev/" target="_blank" rel="noopener noreferrer">
      <img src="/icons/linkedin.png" alt="LinkedIn" />
    </a>
    {/* Adicione mais ícones se quiser */}
  </div>
</div>


        <div className="footer-right">
          <p>Entre em contato:</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensagem"
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} - Desenvolvido por Lukas Romero</p>
      </div>
    </footer>
  );
}

export default Footer;
