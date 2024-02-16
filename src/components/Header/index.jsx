import styles from "./style.module.scss";

import portfolio from "../../assets/portfolio.png"

export const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.div}>
          <img src= { portfolio } />
          <div className={styles.nav}>
              <a>Sobre</a>
              <a>Stack</a>
              <a>Projetos</a>            
          </div>
          <button className="btn__contact">Contato</button>
        </div>
       
      </header>
    )
}