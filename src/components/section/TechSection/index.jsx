import { technologies } from "../../../data/technologies"

import styles from "./styles.module.scss";

export const TechSection = () => {
    return (
      <div className={styles.div__tech}>
        <section className={styles.section__tech}>
          <h2 className="title2">Tecnologia</h2>
          <ul>
            {technologies.map((tecnologie) => {
                return (
                    <li>
                        <p>{tecnologie.name}</p>
                        <img src={tecnologie.img} alt="#" />
                    </li>
            )})}
          </ul>
        </section>
      </div>
        
    )
}