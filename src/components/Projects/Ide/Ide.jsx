import css from "../Projects.module.css"

const Ide=()=>{
    return(
        <div className={css.card}>
            <div className={css.cardVideo}>
                <h3 className={css.title}>Ide Pinturería E-commerce</h3>
                <iframe src="https://www.youtube.com/embed/BlPkojy671Q?si=ql8c8FZhV1N42bTM" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            <div className={css.cardInfo}>
                <p className={css.description}>Ecommerce que facilita la compra/venta de productos, cuenta con dashboard de cliente con funciones típicas y un dashboard de administrador con funciones más avanzadas para facilitar la administración y muchas cosas más.</p>
                <div className={css.cardButtons}>
                    <a href="https://pinturas-app-front-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                        <button>Deploy</button>
                    </a>
                    <a href="https://github.com/orgs/Ide-Pinturerias/repositories" target="_blank" rel="noopener noreferrer">
                        <button>Repositorio</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Ide;
