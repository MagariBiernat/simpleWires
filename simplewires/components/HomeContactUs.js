import React from "react"
import styles from "./HomeContactUs.module.scss"

const HomeContactUs = () => {
  return (
    <div className={styles.Wrapper}>
      <div className="content">
        <div className={styles.ContentWrapper}>
          <h1>SKONTAKTUJ SIĘ Z NAMI</h1>
          <p>Chcesz z nami nawiązać współprace?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            in distinctio? Explicabo quos non repudiandae!
          </p>
          <button>Kontakt</button>
          <p className={styles.bolded}>+48 123 456 789</p>
          <a href="mailto:emailKontaktowy@email.com" className={styles.bolded}>
            emailKontaktowy@email.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeContactUs
