import { projects } from "../../../data/projects"
import github from "../../../assets/git-icon.png"

import styles from "./styles.module.scss"

export const ProjectSection = () => {
    return (
        <div className={styles.div__section}>
            <section className={styles.section__project}>
                <h2 className="title2">Projetos</h2>
                <ul>
                    {projects.map((project) => {
                        return (
                            <li>
                                <div className={styles.div__project}>
                                    <h3 className="title3">{project.name}</h3>
                                    <p className="paragraph">{project.description}</p>
                                    <span className="paragraph1">Saiba mais</span>
                                </div>                        
                                <div className={styles.div__icon}>
                                    <img src={github} />
                                </div>
                                
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
        
    )
}