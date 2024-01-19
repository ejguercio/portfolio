import css from "../Projects.module.css"

const Todo = ()=>{

    return (
        <div className={css.card}>
            <div className={css.cardVideo}>
            <iframe src="https://player.vimeo.com/video/885042879?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" width="640" height="360" allow="autoplay; fullscreen; picture-in-picture" title="to-do list">
            </iframe>
            </div>
            <div className={css.cardInfo}>
                <h3 className={css.title}>To-do List</h3>
                <p className={css.description}>Esta es una tipica lista de tareas que incluye operaciones CRUD (Crear, Leer, Actualizar, Eliminar) y la idea fue hacerlo con PERN STACK (Postgres, Express, React, Node.js) pero sin depender de Redux, Axios o Sequelize</p>
                <div className={css.cardButtons}>
                    <a href="https://to-do-one-gold.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button>Deploy</button>
                    </a>
                    <a href="https://github.com/ejguercio/to-do" target="_blank" rel="noopener noreferrer">
                        <button>Repositorio</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Todo
