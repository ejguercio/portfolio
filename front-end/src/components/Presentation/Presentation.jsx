import React from 'react';
import css from "./Presentation.module.css"
import imagen from "../../assets/presentation.png"
const Presentation = () => {
  return (
    <section id= "presentation" className={css.presentation}>
      <div className={css.container}>
        <div className={css.info}>
          <h2>¡Hola! Soy Edgar Guercio</h2>
          <span>Desarrollador apasionado por la tecnología y la programación.   
          </span>
          <span>¡Bienvenido a mi portafolio!</span>
        </div>
        <div className={css.info}>
          <img src={imagen} alt="Imagen de Edgar Guercio" className={css.img} />
        </div>
      </div>
    </section>
  );
};

export default Presentation;
