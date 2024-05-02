import css from "../Projects.module.css"

const ProjectCard = ({title, description, linkVideo, linkDeploy, linkRepo}) => {
    return (
        <div className={css.card}>
            <div className={css.cardVideo}>
                <h3 className={css.title}>{title}</h3>
                <iframe 
                    src={linkVideo} 
                    width="640" 
                    height="360" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title={title}
                ></iframe>
            </div>
            <div className={css.cardInfo}>
                <p className={css.description}>{description}</p>
                <div className={css.cardButtons}>
                    <a href={linkDeploy} target="_blank" rel="noopener noreferrer">
                        <button>Deploy</button>
                    </a>
                    <a href={linkRepo} target="_blank" rel="noopener noreferrer">
                        <button>Repositorio</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
