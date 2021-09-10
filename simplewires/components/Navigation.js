import Link from "next/link"
import styles from "./Navigation.module.scss"
import { GiCctvCamera as Cctv } from "react-icons/gi"

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.menu_mobile}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul>
            <li>
              <Link href="/dom">
                <a>Dla domu</a>
              </Link>
            </li>
            <li>
              <Link href="/firma">
                <a>Dla firmy</a>
              </Link>
            </li>
            <li>
              <Link href="/outsourcing">
                <a>Outsourcing</a>
              </Link>
            </li>
            <li>
              <Link href="/o-nas">
                <a>O nas</a>
              </Link>
            </li>
            <li>
              <Link href="/wspolpraca">
                <a>Wspolpraca</a>
              </Link>
            </li>
            <li>
              <Link href="/wsparcie">
                <a>Wsparcie</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <a>SimpleWires</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/dom">
                <a>Dla domu</a>
              </Link>
              <nav className={styles.menu_dropdown}>
                <ul>
                  <li>Kamery 1 dom</li>
                  <li>Kamery 2</li>
                  <li>Kamery 3</li>
                  <li>Kamery 4</li>
                </ul>
              </nav>
            </li>
            <li className={styles.menu_item}>
              <Link href="/firma">
                <a>Dla firmy</a>
              </Link>
              <nav className={styles.menu_dropdown}>
                <ul>
                  <li>
                    <Cctv />
                    <p>Kamery 1 firma</p>
                  </li>
                  <li>
                    <Cctv />
                    <p>Kamery 2 firma</p>
                  </li>
                  <li>
                    <Cctv />
                    <p>Kamery 3 firma</p>
                  </li>
                  <li>
                    <Cctv />
                    <p>Kamery 4 firma</p>
                  </li>
                </ul>
              </nav>
            </li>
            <li className={styles.menu_item}>
              <Link href="/outsourcing">
                <a>Outsourcing</a>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/o-nas">
                <a>O nas</a>
              </Link>
            </li>
            <li className={`${styles.menu_item} ${styles.light}`}>
              <Link href="/wspolpraca">
                <a>Współpraca</a>
              </Link>
            </li>
            <li className={`${styles.menu_item} ${styles.light}`}>
              <Link href="/wsparcie">
                <a>Wsparcie</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.divider}></div>
      </div>
    </header>
  )
}

export default Navigation
