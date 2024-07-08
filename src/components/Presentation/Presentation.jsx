import css from "./Presentation.module.css"
import { Zoom } from "react-awesome-reveal";

const Presentation = () => {
  return (
    <section id= "presentation" className={css.presentation}>
      <div className={css.container}>
        <Zoom>
        <div className={css.info}>
        <div className={css.containerIcon}>
          <box-icon name='code-block' animation='fade-up' color='#ffffff' ></box-icon>
        </div>
          <h2>¡Hola! Soy Edgar Guercio</h2>
          <span>Desarrollador apasionado por la tecnología y la programación.   
          </span>
          <span>¡Echa un vistazo a mi portafolio!</span>
        </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Presentation;
