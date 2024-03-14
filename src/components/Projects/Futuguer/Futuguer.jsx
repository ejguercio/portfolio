import css from "../Projects.module.css"

const Futuguer = ()=>{

    return (
        <div className={css.card}>
            <div className={css.cardVideo}>
                <h3 className={css.title}>Futuguer SRL</h3>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/885010754?h=f0726e40cb" width="640" height="360"    allowfullscreen>
                </iframe>
                </div>
            <div className={css.cardInfo}>
                <p className={css.description}>Página institucional hecha con puro HTML y CSS donde hay información de la empresa, diferentes modos de contacto y una galería de imágenes con algunos de sus trabajos realizados.</p>
                <div className={css.cardButtons}>
                    <a href="https://futuguer.online/index.html" target="_blank" rel="noopener noreferrer">
                    <button>Deploy</button>
                    </a>
                    <a href="https://github.com/ejguercio/FUTUGUER" target="_blank" rel="noopener noreferrer">
                    <button>Repositorio</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Futuguer
