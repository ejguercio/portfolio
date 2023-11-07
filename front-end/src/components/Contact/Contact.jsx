import React from 'react';
import css from "./Contact.module.css"

const Contact = () => {
    return (
      <section id="contact" className={css.container}> {/* Aplica la clase del módulo de CSS */}
        <div className={css.container}>
          <h2>Contacto</h2>
          <p>Para ponerse en contacto conmigo, envíame un correo electrónico a: <a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
          <p>Puedes encontrarme en LinkedIn: <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </section>
    );
  };
  
  export default Contact;
