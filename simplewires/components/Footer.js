import React from "react"
import Link from "next/link"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="content">
        <div className={styles.FooterContent}>
          <div className={styles.FooterContent_Element}>
            <h1>
              <span className={styles.Colorfur}>dla d</span>omu
            </h1>
            <Link href="/">
              <a>Inteligentny dom</a>
            </Link>
            <Link href="/">
              <a>Biuro</a>
            </Link>
            <Link href="/">
              <a>Ogrzewanie</a>
            </Link>
            <Link href="/">
              <a>Multimedia</a>
            </Link>
            <Link href="/">
              <a>Internet</a>
            </Link>
            <Link href="/">
              <a>Telefon</a>
            </Link>
            <h1>
              o <span className={styles.Colorfur}>n</span>as
            </h1>
            <Link href="/">
              <a>Misja</a>
            </Link>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
            <Link href="/">
              <a>Produkt</a>
            </Link>
          </div>
          <div className={styles.FooterContent_Element}>
            <h1>
              dla <span className={styles.Colorfur}>fir</span>my
            </h1>

            <Link href="/">
              <a>Inteligentny dom</a>
            </Link>
            <Link href="/">
              <a>Biuro</a>
            </Link>
            <Link href="/">
              <a>Ogrzewanie</a>
            </Link>
            <Link href="/">
              <a>Przegląd</a>
            </Link>
            <Link href="/">
              <a>Miniserver</a>
            </Link>
            <Link href="/">
              <a>Ogrzewanie</a>
            </Link>
            <Link href="/">
              <a>Przegląd</a>
            </Link>
            <Link href="/">
              <a>Miniserver</a>
            </Link>
            <Link href="/">
              <a>Ogrzewanie</a>
            </Link>
            <Link href="/">
              <a>Przegląd</a>
            </Link>
            <Link href="/">
              <a>Miniserver</a>
            </Link>
          </div>
          <div className={styles.FooterContent_Element}>
            <h1>
              outsou<span className={styles.Colorfur}>rci</span>ng
            </h1>
            <Link href="/">
              <a>Hosting</a>
            </Link>
            <Link href="/">
              <a>VPS - linux</a>
            </Link>

            <Link href="/">
              <a>Inteligentny dom</a>
            </Link>
            <Link href="/">
              <a>Biuro</a>
            </Link>
            <Link href="/">
              <a>Ogrzewanie</a>
            </Link>
          </div>
          <div className={styles.FooterContent_Element}>
            <h1>
              o n<span className={styles.Colorfur}>a</span>s
            </h1>
            <Link href="/">
              <a>Misja</a>
            </Link>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
            <Link href="/">
              <a>Produkt</a>
            </Link>

            <h1>o nas</h1>
            <Link href="/">
              <a>Misja</a>
            </Link>
            <Link href="/">
              <a>Kontakt</a>
            </Link>
            <Link href="/">
              <a>Produkt</a>
            </Link>
          </div>
        </div>

        <div className={styles.Copyrights}>
          <div className="content">
            <p>Copyright &copy; 2021 SimpleWires. All rights reserved</p>
            <p>
              Created By
              <a
                href="https://github.com/magariBiernat"
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
  )
}

export default Footer
