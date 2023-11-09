import React from 'react';
import css from './Technologies.module.css';

const Technologies = () => {
  return (
    <section id="technologies" className={css.technologies}>
      <h2 className={css.title}>Tecnologias que utilizo</h2>
      <div className={css.grid}>
        <div className={css.card}>
          <box-icon type='logo' name='html5'></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='css3' type='logo' ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='javascript' type='logo' animation='tada' ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='nodejs' type='logo' animation='tada' ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='react' type='logo' animation='tada' ></box-icon>
        </div>
        <div className={css.card}>
          <box-icon name='postgresql' type='logo' animation='tada' ></box-icon>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
