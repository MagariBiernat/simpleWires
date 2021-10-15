import React from "react"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
import TextLoop from "react-text-loop"
import FadeIn from "@components/FadeIn"
import OfertaData from "data/Oferta"
// import ModalOferta from "@components/ModalOferta"
import { FiPhoneCall as ContactIcon } from "react-icons/fi"
import { MdLocalOffer as OfferIcon } from "react-icons/md"
import { GiTalk as MeetingIcon } from "react-icons/gi"
import ModalNumber from "@components/ModalNumber"

const Oferta = () => {
  // const [oferta, setOferta] = React.useState(null)
  const [showPhoneModal, setShowPhoneModal] = React.useState()
  const pageMeta = {
    title: "Simple Wires - Dla Domu",
    description: "dla domu",
  }
  return (
    <Layout pageMeta={pageMeta}>
      {showPhoneModal && <ModalNumber setModal={setShowPhoneModal} />}
      {/* {oferta && <ModalOferta oferta={oferta} setOferta={setOferta} />} */}
      <header className={styles.Header}>
        <h1>
          Rozwiązania dla <br />
          <TextLoop interval={3500}>
            <span>
              <span className={styles.BorderBottomRed}>Twojego</span> domu
            </span>
            <span>
              <span className={styles.BorderBottomRed}>Twojej</span> firmy
            </span>
            <span>
              <span className={styles.BorderBottomRed}>Ciebie</span>
            </span>
          </TextLoop>
        </h1>
      </header>
      <section className={styles.Section}>
        <h2>Dla Twojego domu</h2>
        <div className={styles.Content}>
          {OfertaData.map(
            (item, index) =>
              item.type === "dom" && (
                <FadeIn
                  key={index}
                  className={styles.ContentElement}
                  duration={Math.random() * (1 - 0.5) + 0.5}
                >
                  <div className={styles.Top}>
                    {item.icon}

                    <h4>{item.title}</h4>
                  </div>
                  <div className={styles.Bottom}>
                    <img rel="preload" src={item.imageBottom} alt="" />
                  </div>
                </FadeIn>
              )
          )}
        </div>
      </section>
      <article className={styles.Decide}>
        <div>
          <h2>Jesteś zdecydowany na naszą ofertę? Dowiedz się, co dalej!</h2>
          <div className={styles.DecideGrid}>
            <div>
              <ContactIcon /> <h1>Skontaktuj się z nami</h1>{" "}
              <p>Wypełnij formularz, albo zadzwoń do nas</p>
            </div>
            <div>
              <MeetingIcon /> <h1>Umówmy się na spotkanie</h1>{" "}
              <p>Wypełnij formularz, albo zadzwoń do nas </p>
            </div>
            <div>
              <OfferIcon /> <h1>Przygotujemy ofertę</h1>{" "}
              <p>Wypełnij formularz, albo zadzwoń do nas</p>
            </div>
          </div>
        </div>
      </article>
      <section className={(styles.Section, styles.Firma)}>
        <h2>Dla Twojej firmy</h2>
        <div className={styles.Content}>
          {OfertaData.map(
            (item, index) =>
              item.type === "firma" && (
                <FadeIn
                  key={index}
                  className={styles.ContentElement}
                  duration={Math.random() * (1 - 0.5) + 0.5}
                >
                  <div className={styles.Top}>
                    {item.icon}

                    <h4>{item.title}</h4>
                    <div></div>
                  </div>
                  <div className={styles.Bottom}>
                    <img rel="preload" src={item.imageBottom} alt="" />
                  </div>
                </FadeIn>
              )
          )}
        </div>
      </section>
      <div className={styles.LeaveNumber}>
        <div>
          <h1>
            Masz pytania? Jesteś niezdecydowany? Zostaw numer, oddzwonimy !
          </h1>
          <button onClick={() => setShowPhoneModal(true)}>Zostaw numer</button>
        </div>
      </div>
    </Layout>
  )
}

export default Oferta
