import css from "./Contact.module.css"

const Contact = () => {
    return (
      <section id="contact" className={css.section} > 
          <h2 className={css.title}>Contacto</h2>
        <div className={css.container}>
          <div>
            <a href="mailto:ejguercio@gmail.com">
              <box-icon name='mail-send' color='#ffffff' />
              <span> ejguercio@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ejguercio/" target="_blank" rel="noopener noreferrer">
              <box-icon name='linkedin-square' type='logo' color='#ffffff' />
              <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <a  href="https://wa.me/+543534115272" target="_blank" rel="noopener noreferrer">
              <box-icon name='phone-call' type='solid' color='#ffffff'/>
              <span>+543534115272</span>
            </a>
            <a href="https://github.com/ejguercio" target="_blank" rel="noopener noreferrer">
              <box-icon name='github' type='logo' color='#ffffff' />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
