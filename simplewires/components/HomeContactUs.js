import React from "react"
import styles from "./HomeContactUs.module.scss"
import Slide from "@components/Slide"

const HomeContactUs = () => {
  return (
    <div className={styles.Wrapper}>
      <div className="content">
        <Slide from={"left"} duration={0.95} className={styles.ContentWrapper}>
          <p className={styles.Top}>Jeśli chcesz nawiązać współprace</p>
          <h1>Skontaktuj się z Nami!</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            in distinctio? Explicabo quos non repudiandae!
          </p>
          <button>Kontakt</button>
          {/* <p className={styles.bolded}>+48 123 456 789</p>
          <a href="mailto:emailKontaktowy@email.com" className={styles.bolded}>
            emailKontaktowy@email.com
          </a> */}
        </Slide>
      </div>
    </div>
  )
}

export default HomeContactUs
