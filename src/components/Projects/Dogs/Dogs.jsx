import css from "../Projects.module.css"

const Dogs=()=>{

    return (
        <div className={css.card}>
            <div className={css.cardVideo}>
                <h3 className={css.title}>Dogs SPA</h3>
                <iframe src="https://player.vimeo.com/video/854832419?h=f8fa799104" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            <div className={css.cardInfo}>
                <p className={css.description}>Página donde consumimos <a href="https://www.thedogapi.com/">The Dog API</a> para acceder a una gran cantidad de información sobre distintas razas de perros con la posibilidad también de agregar razas personalizadas a la base de datos.</p>
                <div className={css.cardButtons}>
                    <button>Deploy</button>
                    <a href="https://github.com/ejguercio/DOGS" target="blank" rel="noopener noreferrer">
                        <button>Repositorio</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Dogs
