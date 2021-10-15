import React from "react"
import Link from "next/link"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
import { FcAssistant } from "react-icons/fc"

import Slide from "@components/Slide"
import FadeIn from "@components/FadeIn"
const index = () => {
  const pageMeta = {
    title: "Simple Wires - Wsparcie",
    description: "Wsparcie",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <div className={styles.Wrapper}>
        {/* <header className={styles.Header}>
          <h2>
            Wsparcie techniczne, <br /> <span>Simple Wires</span>
          </h2>
        </header> */}
        <div className={styles.Support}>
          <div className={styles.SupportContent}>
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h1>Zapewniamy wsparcie techniczne</h1>
          </div>
        </div>
        <div>
          <div className={styles.Availability}>
            <Slide duration={0.6} from={"left"} className={styles.Content}>
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
            </Slide>
          </div>

          <div className={styles.Section}>
            <Slide duration={0.6} from={"right"} className={styles.Content}>
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
            </Slide>
          </div>

          <div className={styles.Availability}>
            <div className={styles.Content}>
              <h1>Zapewniamy</h1>
              <div className={styles.Security}>
                <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </FadeIn>
                <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </FadeIn>
                <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </FadeIn>
                <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
                  <FcAssistant />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          <div className={styles.ContactLater}>
            <Slide from={"right"} duration={0.6} className={styles.Content}>
              <h1>Chcesz abyśmy skontaktowali się z Tobą później ?</h1>
              <p>Skorzystaj z naszego formularza kontaktowego</p>
              <Link href="/kontakt">
                <button>Kontakt</button>
              </Link>
            </Slide>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
