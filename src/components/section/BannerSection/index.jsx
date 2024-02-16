import banner from "../../../assets/banner-img.png"
import { username } from "../../../data/user"

import styles from "./style.module.scss";

export const BannerSection = () => {
    return (
      <div>
        <section className={styles.section}>
          <div className={styles.div__banner}>
            <p className="paragraph1"> { username }</p>
            <h1 className="title1">Bem vindo ao meu portfólio</h1>
            <p className="paragraph">Uma frase interessante sobre mim</p>
            <button className="btn__more">Saiba mais</button>
          </div>
          <div className="div__img">
            <img src={banner} className="img__banner"/>
          </div>
        </section>
      </div>
        
    )
}