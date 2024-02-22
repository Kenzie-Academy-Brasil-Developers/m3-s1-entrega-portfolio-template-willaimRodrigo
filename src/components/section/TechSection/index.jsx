import styles from "./styles.module.scss";

export const TechSection = ({technologies}) => {
    return (
      <div className={styles.div__tech}>
        <section className={styles.section__tech}>
          <h2 className="title2">Tecnologia</h2>
          <ul>
            {technologies.map((tecnologie, index) => {
                return (
                    <li key={index}>
                        <p>{tecnologie.name}</p>
                        <img src={tecnologie.img} alt="#" />
                    </li>
            )})}
          </ul>
        </section>
      </div>
        
    )
}