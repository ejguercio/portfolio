import css from './Technologies.module.css';
import BoxIconWithHover from './BoxIconWithHover'; 
import { Zoom } from 'react-awesome-reveal';

const Technologies = () => {
  return (
    <section id="technologies" className={css.technologies}>
      <h2 className={css.title}>Tecnologías que utilizo</h2>
      <Zoom>
      <div className={css.grid}>
        <div className={css.card}>
          <h3>Typescript</h3>
          <BoxIconWithHover type='logo' name='typescript' color="#3178c6" />
        </div>
        <div className={css.card}>
          <h3>Node.js</h3>
          <BoxIconWithHover type='logo' name='nodejs' color="#3c873a"/>
        </div>
        <div className={css.card}>
          <h3>Docker</h3>
          <BoxIconWithHover type='logo' name='docker' color="#0db7ed" />
        </div>
        <div className={css.card}>
          <h3>PostgreSQL</h3>
          <BoxIconWithHover type='logo' name='postgresql' color="#336791" />
        </div>
        <div className={css.card}>
          <h3>MongoDB</h3>
          <BoxIconWithHover type='logo' name='mongodb' color="#3FA037" />
        </div>
        <div className={css.card}>
          <h3>Angular</h3>
          <BoxIconWithHover type='logo' name='angular' color="#a6120d" />
        </div>
        <div className={css.card}>
          <h3>React</h3>
          <BoxIconWithHover type='logo' name='react' color="#00d8ff" />
        </div>
        <div className={css.card}>
          <h3>Redux</h3>
          <BoxIconWithHover type='logo' name='redux' color="#764abc" />
        </div>
        <div className={css.card}>
          <h3>Bootstrap</h3>
          <BoxIconWithHover type='logo' name='bootstrap' color="#7952B3" />
        </div>
      </div>
    </Zoom>
    </section>
  );
};

export default Technologies;
