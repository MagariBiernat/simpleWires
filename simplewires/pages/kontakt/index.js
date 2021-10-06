import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import styles from "./index.module.scss"
import Slide from "@components/Slide"

import Checkbox from "react-custom-checkbox"
import { FiCheck } from "react-icons/fi"

const pageMeta = {
  title: "Simple Wires - kontakt",
  description: "description",
}

const Kontakt = () => {
  const [checkBoxChecked, setCheckBoxChecked] = React.useState(false)
  const router = useRouter()

  const handleChange = () => {
    setCheckBoxChecked(!checkBoxChecked)
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
            <p></p>
            <div className={styles.Contact}>
              <Slide from={"left"} duration={0.7}>
                <p className={styles.Bold}>Bartosz</p>
                <p className={styles.Specialist}>
                  Specjalista ds. Elektryki Niskonapięciowej, Monitoringu,
                  Alarmu, Kontroli dostępu, Okablowania strukturalnego, Sieci
                  LAN
                </p>
                <p>+48 730 165 916</p>
                <p>bartek.holysz@simplewires.pl</p>
              </Slide>
              <div className={styles.ContactDivider}></div>
              <Slide from={"right"} duration={0.7}>
                <p className={styles.Bold}>Adrian</p>
                <p className={styles.Specialist}>
                  Specjalista ds. Instalacji Elektrycznych, Automatyki
                  budynkowej, osprzętu elektrycznego
                </p>
                <p>+48 536 165 916</p>
                <p>adrian.mycka@simplewires.pl</p>
              </Slide>
            </div>
          </div>
          <div className={styles.Map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40999.70914744706!2d22.635555865817487!3d50.03980478167173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c999ba4724117%3A0xf0af546945ff9776!2zSmFyb3PFgmF3!5e0!3m2!1spl!2spl!4v1631535267921!5m2!1spl!2spl"
              height="450"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <div className={styles.ContactFormWrapper}>
            <h1>
              Masz pytanie?
              <br /> A moze chcesz nawiązać współprace? <br /> Wypełnij poniższy
              formularz aby się z nami skontaktować
            </h1>
            <Slide
              from={"left"}
              duration={0.9}
              className={styles.ContactFormWrapperBottom}
            >
              <form onSubmit={handleSubmitForm} className={styles.ContactForm}>
                <div className={styles.FormInput}>
                  <div className={styles.FormInputs}>
                    <input
                      type="text"
                      name="firstName"
                      required={true}
                      autoComplete="true"
                      placeholder="Imię"
                    />

                    {/* <input
                      type="text"
                      name="lastName"
                      required="true"
                      autoComplete="true"
                      placeholder="Nazwisko"
                    /> */}

                    <input
                      type="tel"
                      name="phone"
                      required={true}
                      autoComplete="true"
                      placeholder="Numer telefonu"
                    />

                    <input
                      type="email"
                      name="email"
                      required={true}
                      autoComplete="true"
                      placeholder="Email"
                    />
                  </div>
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Twoja wiadomość do nas"
                  ></textarea>
                </div>
                <div className={styles.FormCheckBox}>
                  <Checkbox
                    icon={<FiCheck color="#ffee00;" size={20} />}
                    className={styles.Checkbox}
                    id="rodo"
                    type="checkbox"
                    onChange={handleChange}
                    value={checkBoxChecked}
                    size={26}
                    borderColor="#ffee00;"
                    borderWidth={3}
                    style={{ cursor: "pointer", marginRight: 15 }}
                    labelStyle={{ marginLeft: 15, userSelect: "none" }}
                  />
                  <label htmlFor="rodo">
                    Wyrażam zgodę na wykorzystywanie moich danych w celu
                    przetwarzania mojego zgłoszenia. Informacje i pouczenie o
                    prawie do odwołania zgody są zawarte w{" "}
                    <Link href="/prywatnosc">
                      <span className={styles.Politics}>
                        Polityce prywatności
                      </span>
                    </Link>
                  </label>
                </div>
                <div className={styles.FormButtons}>
                  <button type="submit"> Wyślij zapytanie </button>
                </div>
              </form>
              <Slide
                from={"right"}
                duration={1.7}
                className={styles.ContactFormWrapperBottomImage}
              >
                <img
                  src="https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                  alt=""
                />
              </Slide>
            </Slide>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Kontakt
