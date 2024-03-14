import css from './Technologies.module.css';
import BoxIconWithHover from './BoxIconWithHover'; 
const Technologies = () => {
  return (
    <section id="technologies" className={css.technologies}>
      <h2 className={css.title}>Tecnologías que utilizo</h2>
      <div className={css.grid}>
        <div className={css.card}>
          <h3>HTML</h3>
          <BoxIconWithHover type='logo' name='html5' color="#FF4500" />
        </div>
        <div className={css.card}>
          <h3>CSS</h3>
          <BoxIconWithHover type='logo' name='css3' color="#2965f1" />
        </div>
        <div className={css.card}>
          <h3>Javascript</h3>
          <BoxIconWithHover type='logo' name='javascript' color="#f0db4f" />
        </div>
        <div className={css.card}>
          <h3>Node.js</h3>
          <BoxIconWithHover type='logo' name='nodejs' color="#3c873a" />
        </div>
        <div className={css.card}>
          <h3>React</h3>
          <BoxIconWithHover type='logo' name='react' color="#00d8ff" />
        </div>
        <div className={css.card}>
          <h3>PostgreSQL</h3>
          <BoxIconWithHover type='logo' name='postgresql' color="#336791" />
        </div>
        <div className={css.card}>
          <h3>Redux</h3>
          <BoxIconWithHover type='logo' name='redux' color="#764abc" />
        </div>
        <div className={css.card}>
          <h3>Docker</h3>
          <BoxIconWithHover type='logo' name='docker' color="#0db7ed" />
        </div>
        <div className={css.card}>
          <h3>MongoDB</h3>
          <BoxIconWithHover type='logo' name='mongodb' color="#3FA037" />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
