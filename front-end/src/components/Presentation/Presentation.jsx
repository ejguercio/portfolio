import React from 'react';
import css from "./Presentation.module.css"

const Presentation = () => {
  return (
    <section id= "presentation" className={css.presentation}>
      <div className={css.container}>
        <h2>¡Hola! Soy Edgar</h2>
        <p>Desarrollador junior apasionado por la tecnología y la programación. ¡Bienvenido a mi portafolio!</p>
      </div>
    </section>
  );
};

export default Presentation;
