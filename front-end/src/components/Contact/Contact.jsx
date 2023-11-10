import css from "./Contact.module.css"

const Contact = () => {
    return (
      <section id="contact" className={css.container}> 
        <div className={css.container}>
          <h2 className={css.title}>Contacto</h2>
            <box-icon name='mail-send' color='#ffffff' />
          <span>Esribime: <a href="mailto:ejguercio@gmail.com">ejguercio@gmail.com</a></span>
            <box-icon name='phone-call' type='solid' color='#ffffff'/>
          <span>Lamame: <a href="https://wa.me/+543534115272">+543535272</a></span>
          <box-icon name='linkedin-square' type='logo' color='#ffffff' />
          <span>Conecta <a href="https://www.linkedin.com/in/ejguercio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
          <box-icon name='github' type='logo' color='#ffffff' />
          <span>Seguime <a href="https://www.linkedin.com/in/ejguercio/" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </section>
    );
  };
  
  export default Contact;
