import React from "react"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
import TextLoop from "react-text-loop"
import {
  FcElectricalSensor,
  FcElectricalThreshold,
  FcAutomatic,
  FcAlarmClock,
  FcWebcam,
  FcWiFiLogo,
  FcHome,
  FcIdea,
} from "react-icons/fc"
import { BiSun } from "react-icons/bi"
import { SiIntercom } from "react-icons/si"
const MockData = [
  {
    title: "Instalacje Elektryczne",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, consectetur, adipisci velit",
    icon: <FcElectricalSensor />,
  },
  {
    title: "Instalacje SAT / NAZ",
    description: "consectetur, adipisci velit, consectetur, adipisci velit",
    icon: <FcElectricalThreshold />,
  },
  {
    title: "Automatyka domowa",
    subtitle: "Napędy do bram, podłączanie rolet",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    icon: <FcAutomatic />,
  },
  {
    title: "Alarm",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcAlarmClock />,
  },
  {
    title: "Monitoring",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    icon: <FcWebcam />,
  },
  {
    title: "Wideodomofony",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, lorem ipsum",
    icon: <SiIntercom />,
  },
  {
    title: "Fotowoltaika",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    icon: <BiSun className={styles.sun} />,
  },
  {
    title: "Sieć domowa",
    subtitle: "WiFi, LAN",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcWiFiLogo />,
  },
  {
    title: "BIały Montaż",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    icon: <FcHome />,
  },
  {
    title: "Oświetlenie zewnętrzne",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: "Oświetlenie ogrodowe",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    icon: <FcIdea />,
  },
  {
    title: " Instalacje LED",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
]

const MockDataFirma = [
  {
    title: " Systemy Alarmowe",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Wideodomofony",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Telefonia VOIP",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Kontrola Dostępu",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Kontrola Czasu Pracy",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Szlabany",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Automatyka Budynkowa",
    subtitle: "Napędy do bram",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Sieci LAN",
    subtitle: "Certyfikowane",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Serwerownie",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Administrowanie Sieciami",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Telewizja Dozorowa",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Światłowody",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Instalacje Elektryczne",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
  {
    title: " Biały Montaż",
    description:
      "quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,",
    icon: <FcIdea />,
  },
]
const index = () => {
  const pageMeta = {
    title: "Simple Wires - Dla Domu",
    description: "dla domu",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <header className={styles.Header}>
        <h1>
          Rozwiązania dla <br />
          <TextLoop interval={3500}>
            <span>
              {" "}
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
          {MockData.map((item, index) => (
            <div key={index} className={styles.ContentElement}>
              {item.icon}

              <h3>
                {item.title}{" "}
                {item.subtitle && (
                  <>
                    <br />
                    <span className={styles.SubTitle}>{item.subtitle}</span>
                  </>
                )}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={(styles.Section, styles.Firma)}>
        <h2>Dla Twojej firmy</h2>
        <div className={styles.Content}>
          {MockDataFirma.map((item, index) => (
            <div key={index} className={styles.ContentElement}>
              {item.icon}

              <h3>
                {item.title}{" "}
                {item.subtitle && (
                  <>
                    <br />
                    <span className={styles.SubTitle}>{item.subtitle}</span>
                  </>
                )}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default index
