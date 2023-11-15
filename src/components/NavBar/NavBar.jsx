import css from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.container}>
        <ul>
          <li><a href="#presentation">Presentación</a></li>
          <li><a href="#technologies">Tecnologías</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
