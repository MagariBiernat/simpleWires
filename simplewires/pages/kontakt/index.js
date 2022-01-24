import { useRouter } from "next/router"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import styles from "./index.module.scss"
import Slide from "@components/Slide"

import Checkbox from "react-custom-checkbox"
import { FiCheck } from "react-icons/fi"
import { AiOutlineMail as Email, AiOutlinePhone as Phone } from "react-icons/ai"
import { Link as LinkScroll } from "react-scroll"

const pageMeta = {
  title: "Simple Wires - kontakt",
  description: "description",
}

const initialFormValues = {
  firstName: "",
  phoneNumber: "",
  email: "",
  content: "",
}

const Kontakt = () => {
  const [checkBoxChecked, setCheckBoxChecked] = React.useState(false)
  const [formValues, setFormValues] = React.useState(initialFormValues)
  const router = useRouter()

  const handleChange = () => {
    setCheckBoxChecked(!checkBoxChecked)
  }

  const handleChangeForm = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  console.log(formValues)
  const setAllInputsEmpty = () => {
    Array.from(document.querySelectorAll("input, select, textarea")).forEach(
      (input) => (input.value = "")
    )
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (Object.values(formValues).filter((x) => x.length === 0).length === 0) {
      fetch("https://magaribiernat.com/simplewires/email/contact", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setAllInputsEmpty()
            setFormValues(initialFormValues)
            alert("Dziekujemy, skontaktujemy się z Tobą !")
          }
        })
        .catch((err) => console.log(err))
    } else {
      alert("Prosze uzupełnić wszystkie pola")
    }
  }
  return (
    <Layout pageMeta={pageMeta}>
      <div className={styles.Wrapper}>
        <header className={styles.Header}>
          <div className={styles.HeaderInfo}>
            <h1>Skontaktuj się z nami</h1>
            <button>
              <LinkScroll to="contactForm" offset={-80} smooth={true}>
                Wypełnij formularz
              </LinkScroll>
            </button>
          </div>
        </header>
        <div>
          <div className={styles.ContactWrapper}>
            <div className={styles.Contact}>
              <Slide from={"left"} duration={0.7}>
                <p className={styles.Bold}>Bartosz</p>
                <p className={styles.Specialist}>
                  Specjalista ds. Elektryki Niskonapięciowej, Monitoringu,
                  Alarmu, Kontroli dostępu, Okablowania strukturalnego, Sieci
                  LAN
                </p>
                <a href="tel:730165916">
                  <Phone /> +48 730 165 916
                </a>
                <p>
                  <a href="mailto:bartek.holysz@simplewires.pl">
                    <Email />
                    bartek.holysz@simplewires.pl
                  </a>
                </p>
              </Slide>
              <div className={styles.ContactDivider}></div>
              <Slide from={"right"} duration={0.7}>
                <p className={styles.Bold}>Adrian</p>
                <p className={styles.Specialist}>
                  Specjalista ds. Instalacji Elektrycznych, Automatyki
                  budynkowej, osprzętu elektrycznego
                </p>
                <a href="tel:536165916">
                  <Phone /> +48 536 165 916
                </a>
                <a href="mailto:adrian.mycka@simplewires.pl">
                  <p>
                    <Email />
                    adrian.mycka@simplewires.pl
                  </p>
                </a>
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
          <div className={styles.ContactFormWrapper} id="contactForm">
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
                      onChange={handleChangeForm}
                    />

                    <input
                      type="tel"
                      name="phoneNumber"
                      required={true}
                      autoComplete="true"
                      placeholder="Numer telefonu"
                      onChange={handleChangeForm}
                    />

                    <input
                      type="email"
                      name="email"
                      required={true}
                      autoComplete="true"
                      placeholder="Email"
                      onChange={handleChangeForm}
                    />
                  </div>
                  <textarea
                    name="content"
                    cols="30"
                    rows="10"
                    placeholder="Twoja wiadomość do nas"
                    onChange={handleChangeForm}
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
                  <button
                    type="submit"
                    disabled={checkBoxChecked ? false : true}
                  >
                    Wyślij
                  </button>
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
