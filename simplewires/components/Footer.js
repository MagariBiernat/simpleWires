import React from "react"
import Link from "next/link"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className="content">
          <div className={styles.FooterContent}>
            <div
              className={`${styles.FooterContent_Element} ${styles.AlignLeft}`}
            >
              <h1>
                <span className={styles.Colorfur}>dla d</span>omu
              </h1>
              <Link href="/">
                <a>Oświetlenie zewnętrzne i wewnętrzne</a>
              </Link>

              <Link href="/">
                <a>Montaż osprzętu elektrycznego</a>
              </Link>
              <Link href="/">
                <a>Automatyka domowa</a>
              </Link>
              <Link href="/">
                <a>Instalacje elektryczne</a>
              </Link>
              <Link href="/">
                <a>Systemy monitoringu</a>
              </Link>

              <Link href="/">
                <a>Systemy alarmowe</a>
              </Link>

              <Link href="/">
                <a>Wideodomofony</a>
              </Link>
              <Link href="/">
                <a>Sieć domowa</a>
              </Link>

              <Link href="/">
                <a>Fotowoltaika</a>
              </Link>
            </div>
            <div
              className={`${styles.FooterContent_Element} ${styles.AlignCenter}`}
            >
              <h1>
                dla <span className={styles.Colorfur}>fir</span>my
              </h1>

              <Link href="/">
                <a>Telewizja dozorowa CCTV</a>
              </Link>
              <Link href="/">
                <a>Automatyka budynkowa</a>
              </Link>

              <Link href="/">
                <a>Instalacje Elektryczne</a>
              </Link>
              <Link href="/">
                <a>Sieci LAN certyfikowane</a>
              </Link>

              <Link href="/">
                <a>Administrowanie sieciami</a>
              </Link>
              <Link href="/">
                <a>Systemy alarmowe</a>
              </Link>
              <Link href="/">
                <a>Wideodomofony</a>
              </Link>
              <Link href="/">
                <a>Kontrola dostępu</a>
              </Link>
              <Link href="/">
                <a>Kontrola czasu pracy</a>
              </Link>

              <Link href="/">
                <a>Telefonia VOIP</a>
              </Link>
              <Link href="/">
                <a>Szlabany</a>
              </Link>
              <Link href="/">
                <a>Serwerownie</a>
              </Link>
            </div>

            <div
              className={`${styles.FooterContent_Element} ${styles.AlignRight}`}
            >
              <h1>
                o n<span className={styles.Colorfur}>a</span>s
              </h1>
              <Link href="/o-firmie">
                <a>O firmie</a>
              </Link>
              <Link href="/kontakt">
                <a>Kontakt</a>
              </Link>
              <Link href="/wspolpraca">
                <a>Współpraca</a>
              </Link>
              <Link href="/wsparcie">
                <a>Wsparcie</a>
              </Link>
            </div>
          </div>

          <div className={styles.Copyrights}>
            <div className="content">
              <p>Copyright &copy; 2021 SimpleWires. All rights reserved</p>
              <p>
                Created By
                <a
                  href="https://magariBiernat.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Bartłomiej Biernat
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
