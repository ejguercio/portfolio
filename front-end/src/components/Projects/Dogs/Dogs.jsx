import css from "../Projects.module.css"

const Dogs=()=>{

    return (
        <div className={css.card}>
            <div className={css.cardVideo}>
                <iframe src="https://player.vimeo.com/video/854832419?h=f8fa799104" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            <div className={css.cardInfo}>
                <h3 className={css.title}>Dogs SPA</h3>
                <p className={css.description}>Pagina donde consumimos <a href="https://www.thedogapi.com/">The Dog API</a> para acceder a un gran cantidad de informacion sobre distintas razas de perros con la posibilidad tambien de agregar razas personalizadas a la base de datos</p>
                <div className={css.cardButtons}>
                    <button>Deploy</button>
                    <button>Repositorio</button>
                </div>
            </div>
        </div>
    )
}

export default Dogs
