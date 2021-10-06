import React from "react"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
import Mapa from "@public/images/mapa.png"
const index = () => {
  const pageMeta = {
    title: "Simple Wires - o firmie",
    description: "description o firmie",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <section className={styles.Wrapper}>
        <div className={styles.About}>
          <div className={styles.Content}>
            <h1>O firmie Simple Wires</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              expedita tempora voluptatum enim eveniet modi. Minima fuga
              veritatis aperiam reiciendis deleniti perspiciatis, maiores
              incidunt ipsam itaque, laudantium repellat ipsa commodi?
            </p>
          </div>
        </div>

        <div className={styles.Quality}>
          <div className={`${styles.Content} ${styles.QualityContent}`}>
            <h1>Stawiamy na jakość</h1>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem, ipsum dolor.</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              expedita tempora voluptatum enim eveniet modi. Minima fuga
              veritatis aperiam reiciendis deleniti perspiciatis, maiores
              incidunt ipsam itaque, laudantium repellat ipsa commodi?
            </p>
          </div>
        </div>

        <div className={styles.Mission}>
          <div className={styles.Content}>
            <h1>Misja i cel firmy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus illum illo doloremque praesentium eveniet itaque
              natus, iusto veritatis dolorem? Sunt doloremque odit iure debitis
              minus.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              in fugit magnam, eius neque nam possimus iusto nihil! Dolor
              reprehenderit harum ullam impedit nostrum numquam earum inventore
              ex voluptatibus, culpa delectus nulla nobis odio veniam?
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <img src={Mapa} alt="Tutaj działamy" />
            </div>
          </div>
        </div>

        <div className={styles.Contact}>
          <div className={styles.Content}>
            <h1>Skontaktuj się z nami !</h1>
            <p>
              Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Itaque voluptatum aliquam labore. Ducimus,
              adipisci natus!
            </p>
            <button>Kontakt</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default index
