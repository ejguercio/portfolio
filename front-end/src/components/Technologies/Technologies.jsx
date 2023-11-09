import React from 'react';
import css from './Technologies.module.css';

const Technologies = () => {
  return (
    <section id="technologies" className={css.technologies}>
      <h2 className={css.title}>Tecnologias que utilizo</h2>
      <div className={css.grid}>
        <div className={css.card}>
          <box-icon type='logo' animation='tada' name='html5' color="#FF4500	"></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='css3' type='logo' animation='tada' color="#2965f1" ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='javascript' type='logo' animation='tada' color="	#f0db4f" ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='nodejs' type='logo' animation='tada' color="	#3c873a" ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='react' type='logo' animation='tada' color="#00d8ff"></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='postgresql' type='logo' animation='tada' color="#336791"></box-icon>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
