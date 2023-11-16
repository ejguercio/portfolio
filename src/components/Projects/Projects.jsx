import Dogs from "./Dogs/Dogs"
import Futuguer from "./Futuguer/Futuguer"
import Ide from "./Ide/Ide"
import Todo from "./Todo/Todo"
import css from "./Projects.module.css"

const Projects=()=>{


return (
<section id="projects" className={css.projects}>
    <h2>Proyectos</h2>
    <div className={css.container}>
        <Ide/>
        <Dogs/>
        <Todo/>
        <Futuguer/>
    </div>
</section>
)
}

export default Projects
