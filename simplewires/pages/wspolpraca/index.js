import React from "react"

import Link from "next/link"
import styles from "./index.module.scss"
import bcs from "@public/certified_partners/bcs.png"

import fibrainLogo from "@public/partners/fibrain-logo.jpg"
import satelLogo from "@public/partners/logo-satel.svg"
import polonAlfaLogo from "@public/partners/polon-alfa.png"
import rogerLogo from "@public/partners/roger.png"
import Checkbox from "react-custom-checkbox"
import { FiCheck } from "react-icons/fi"
import { FcApproval } from "react-icons/fc"
import partnership from "@public/images/wspolpraca.png"
import partnership2 from "@public/images/wspolpraca2.png"

import Slide from "@components/Slide"

import Layout from "@components/Layout"

const pageMeta = {
  title: "Simple Wires - Wspolpraca",
  description: "Wspolpraca",
}
const index = () => {
  const [checkBoxChecked, setCheckBoxChecked] = React.useState(false)
  console.log(checkBoxChecked)

  const handleChange = () => {
    setCheckBoxChecked(!checkBoxChecked)
  }
  return (
    <Layout pageMeta={pageMeta}>
      <div className={styles.Wrapper}>
        <div></div>
        <div className={styles.Wspolpraca}>
          <div className="content">
            <h1>Jesteśmy certyfikowanymi partnerami : </h1>
            <div className={styles.Logos}>
              <Slide from={"left"} duration={0.6}>
                <img src={bcs} alt="" />
              </Slide>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.Partnership}>
            <div>
              <h1>
                Co zyskują nasi <br /> partnerzy biznesowi?
              </h1>
              <div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta molestiae voluptatum reprehenderit minus adipisci
                  doloribus quas esse eaque aspernatur, voluptatem distinctio
                  delectus quos impedit earum totam magni mollitia aliquam
                  error? Accusantium quia impedit iure quod sequi! Magnam
                  laudantium est, maxime libero veritatis quis qui quasi nobis
                  laboriosam nulla dolore cupiditate. Quod enim voluptatibus
                  veritatis quam sit magni facilis in? Repellat cupiditate
                  recusandae ipsum, repellendus facere optio, cum vero nobis
                  quibusdam architecto sint. Iusto quo nobis voluptates pariatur
                  esse cum asperiores?
                </p>
                <FcApproval />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  vitae temporibus beatae ratione fuga doloribus aliquam rerum,
                  quia nihil a!
                </p>
              </div>
            </div>
            <div>
              <Slide from={"right"} duration={0.6}>
                <img
                  src={partnership}
                  alt="Wspolpraca z partnerami biznesowymi"
                />
              </Slide>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.Wspolpraca}>
            <div className="content">
              <h1>Współpracujemy z firmami : </h1>
              <div className={styles.Logos}>
                <Slide from={"right"} duration={0.7}>
                  <img src={fibrainLogo} alt="" />
                </Slide>
                <Slide from={"right"} duration={0.6}>
                  <img src={satelLogo} alt="" />
                </Slide>
                <Slide from={"left"} duration={0.7}>
                  <img src={polonAlfaLogo} alt="" />
                </Slide>
                <Slide from={"left"} duration={0.6}>
                  <img src={bcs} alt="" />
                </Slide>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <div className={styles.PartnershipContact}>
              <div>
                <Slide from={"left"} duration={0.6}>
                  <img src={partnership2} alt="" />
                </Slide>
              </div>
              <div>
                <h1>Masz jakieś pytania ?</h1>
                <p>Skontaktuj się z nami</p>
                <button>Kontakt</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ContactPartnership}>
          <div className="content">
            <h1>
              Jeśli chcesz z nami zawiązać współpracę partnerską, <br /> zgłoś
              się poprzez poniższy formularz
            </h1>
            <form action="" className={styles.ContactPartnershipForm}>
              <div>
                <input type="text" name="firstName" placeholder="Imię" />
                <input type="text" name="lastName" placeholder="Nazwisko" />
                <input type="text" name="companyName" placeholder="Firma" />
                <input type="email" name="email" placeholder="E-Mail" />
                <input type="phone" name="phone" placeholder="Numer telefonu" />
              </div>
              <div>
                <input type="text" name="street" placeholder="Ulica" />
                <input type="text" name="postal" placeholder="Kod pocztowy" />
                <input type="text" name="city" placeholder="Miejscowość" />
                <select name="voivodeship">
                  <option value=""> - Województwo -</option>
                  <option value="lubelskie">Lubelskie</option>
                  <option value="malopolskie">Małopolskie</option>
                  <option value="podkarpackie">Podkarpackie</option>
                  <option value="swietokrzyskie">Świętokrzyskie</option>
                </select>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Wiadomość.."
                ></textarea>
              </div>
              <div>
                <Checkbox
                  icon={<FiCheck color="#ffee00;" size={20} />}
                  className={styles.Checkbox}
                  id="choice"
                  type="checkbox"
                  onChange={handleChange}
                  value={checkBoxChecked}
                  size={26}
                  borderColor="#ffee00;"
                  borderWidth={3}
                  style={{ cursor: "pointer", marginRight: 15 }}
                  labelStyle={{ marginLeft: 15, userSelect: "none" }}
                />
                <label>
                  Wyrażam zgodę na wykorzystywanie moich danych w celu
                  przetwarzania mojego zgłoszenia. Informacje i pouczenie o
                  prawie do odwołania zgody są zawarte w
                  <Link href="/prywatnosc">
                    <span className={styles.Politics}>
                      Polityce prywatności
                    </span>
                  </Link>
                </label>
              </div>
              <button disabled={checkBoxChecked ? false : true}>Wyślij</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
