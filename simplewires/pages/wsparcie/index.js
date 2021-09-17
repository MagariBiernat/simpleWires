import React from "react"
import Link from "next/link"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
import { FcAssistant } from "react-icons/fc"
const index = () => {
  const pageMeta = {
    title: "Simple Wires - Wsparcie",
    description: "Wsparcie",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <div className={styles.Wrapper}>
        <header className={styles.Header}>
          <h2>
            Wsparcie techniczne, <br /> <span>Simple Wires</span>
          </h2>
        </header>
        <div>
          <div className={styles.Availability}>
            <div className={styles.Content}>
              <h1>
                Jesteśmy dostępni 24/7, <br /> 7 dni w tygodniu. <br />{" "}
                <FcAssistant />
              </h1>

              <p>
                Wsparcie techniczne naszej firmy jest do twojej dyspozycji.
                Chętnie odpowiemy na pytania dotyczące oferowanych przez nas
                usług Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Unde expedita aperiam vero temporibus voluptatem nobis sit
                laboriosam harum deserunt numquam.
              </p>
            </div>
          </div>

          <div className={styles.Section}>
            <div className={styles.Content}>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                nemo tempora aperiam eveniet explicabo illo, iure ullam
                doloremque mollitia necessitatibus accusamus beatae sed debitis
                commodi temporibus excepturi. Dolorum, voluptas corporis? Vero
                laborum blanditiis debitis explicabo.
              </p>

              <ul>
                <li>Lorem ipsum dolor sit. Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit. Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit. Lorem, ipsum.</li>
                <li>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className={styles.Availability}>
            <div className={styles.Content}>
              <h1>Zapewniamy</h1>
              <div className={styles.Security}>
                <div>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.ContactLater}>
            <div className={styles.Content}>
              <h1>Chcesz abyśmy skontaktowali się z Tobą później ?</h1>
              <p>Skorzystaj z naszego formularza kontaktowego</p>
              <Link href="/kontakt">
                <button>Kontakt</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
