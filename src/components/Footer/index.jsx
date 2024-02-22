import whatsapp from "../../assets/whatsapp-icon.png";
import linkedin from "../../assets/linkedin-icon.png";
import git from "../../assets/github-icon.png";
import { user } from "../../data/user";

import styles from "./styles.module.scss";

export const Footer = () => {
    return (
      <div className={styles.footer__div}>
          <footer className={styles.footer}>
            <div className={styles.div__footer}>
              <div>
              <h3 className="title2">Contatos</h3>
              <img src= {whatsapp}  className={styles.img}/>
              <img src= {linkedin} />
              <img src= {git} />
              </div>
              <div>
                <p className="paragraph">Todos os direitos reservados - { user }</p>
              </div>
            </div>         
          </footer>
      </div>   
    )
}