import { useRouter } from "next/router"
import React from "react"
import Layout from "../../components/Layout"
import styles from "./kontakt.module.scss"

const Kontakt = () => {
  const router = useRouter()
  const pageMeta = {
    title: "Simple Wires - kontakt",
    description: "description",
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
  }
  return (
    <Layout pageMeta={pageMeta}>
      <div className={styles.Wrapper}>
        <header className={styles.Header}>
          <div className={styles.HeaderInfo}>
            <h1>Skontaktuj się z nami</h1>
            <button>Wypełnij formularz</button>
          </div>
        </header>
        <div>
          <div className={styles.ContactWrapper}>
            <div className="content">
              <div className={styles.Contact}>
                <h2>Kontakt do nas</h2>
                <div className={styles.ContactElement}>
                  <span>Adres : </span>
                  <div>
                    <p>Jarosław 00-000</p>
                    <p>ul.Krakowska 1 100a</p>
                  </div>
                </div>
                <div className={styles.ContactElement}>
                  <span>Telefon : </span>
                  <div>
                    <p>+48 123 456 789</p>
                    <p> +48 123 456 789</p>
                  </div>
                </div>
                <div className={styles.ContactElement}>
                  <span>Email : </span>
                  <p>
                    <a href="mailto:email@email.com">email@email.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40999.70914744706!2d22.635555865817487!3d50.03980478167173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c999ba4724117%3A0xf0af546945ff9776!2zSmFyb3PFgmF3!5e0!3m2!1spl!2spl!4v1631535267921!5m2!1spl!2spl"
              height="450"
              allowFullScreen="true"
              loading="lazy"
            ></iframe>
          </div>
          <div className={styles.ContactFormWrapper}>
            <h1>
              Masz pytanie?
              <br /> A moze chcesz nawiązać współprace? <br /> Wypełnij poniższy
              formularz aby się z nami skontaktować
            </h1>
            <div className={styles.ContactFormWrapperBottom}>
              <form onSubmit={handleSubmitForm} className={styles.ContactForm}>
                <div>
                  <div className={styles.FormInput}>
                    <input
                      type="text"
                      name="firstName"
                      required="true"
                      autoComplete="true"
                      placeholder="Imię"
                    />

                    <input
                      type="text"
                      name="lastName"
                      required="true"
                      autoComplete="true"
                      placeholder="Nazwisko"
                    />

                    <input
                      type="phone"
                      name="phone"
                      required="true"
                      autoComplete="true"
                      placeholder="Numer telefonu"
                    />

                    <input
                      type="email"
                      name="email"
                      required="true"
                      autoComplete="true"
                      placeholder="Email"
                    />
                  </div>
                  <textarea name="message" cols="30" rows="10"></textarea>
                </div>
                <div>
                  <button type="submit"> Wyślij zapytanie </button>
                  <button type="reset"> Wyczyść formularz </button>
                </div>
              </form>
              <div>asdfa</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Kontakt
