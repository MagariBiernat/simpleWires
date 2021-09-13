import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Navigation.module.scss"
import { RiContactsLine as ContactIcon } from "react-icons/ri"
import { HiOutlineOfficeBuilding as OfficeIcon } from "react-icons/hi"
import { GrProjects as ProjectsIcon } from "react-icons/gr"

const Navigation = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.menu_mobile}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div>
            <ul>
              <li>
                <Link href="/dom">
                  <a
                    className={
                      router.pathname.includes("/dom") && styles.active
                    }
                  >
                    Dla domu
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/firma">
                  <a
                    className={
                      router.pathname.includes("/firma") && styles.active
                    }
                  >
                    Dla firmy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wsparcie">
                  <a
                    className={
                      router.pathname.includes("/wsparcie") && styles.active
                    }
                  >
                    Wsparcie
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/outsourcing">
                  <a
                    className={
                      router.pathname.includes("/outsourcing") && styles.active
                    }
                  >
                    Outsourcing
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/o-nas">
                  <a
                    className={
                      router.pathname.includes("/o-nas") && styles.active
                    }
                  >
                    O nas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wspolpraca">
                  <a
                    className={
                      router.pathname.includes("/wspolpraca") && styles.active
                    }
                  >
                    Wspolpraca
                  </a>
                </Link>
              </li>
            </ul>
          </div>
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
                <a
                  className={router.pathname.includes("/dom") && styles.active}
                >
                  Dla domu
                </a>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/firma">
                <a
                  className={
                    router.pathname.includes("/firma") && styles.active
                  }
                >
                  Dla firmy
                </a>
              </Link>
            </li>
            <li className={`${styles.menu_item}`}>
              <Link href="/wsparcie">
                <a
                  className={
                    router.pathname.includes("/wsparcie") && styles.active
                  }
                >
                  Wsparcie
                </a>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/outsourcing">
                <a
                  className={
                    router.pathname.includes("/outsourcing") && styles.active
                  }
                >
                  Outsourcing
                </a>
              </Link>
            </li>
            <li className={`${styles.menu_item} ${styles.light}`}>
              <a
                className={router.pathname.includes("/o-nas") && styles.active}
              >
                O nas
              </a>
              <nav className={styles.menu_dropdown}>
                <ul>
                  <Link href="/o-nas/firma">
                    <li
                      className={
                        router.pathname.includes("/o-nas/firma") &&
                        styles.active
                      }
                    >
                      <OfficeIcon />
                      <p>O firmie</p>
                    </li>
                  </Link>
                  <Link href="/o-nas/realizacje">
                    <li>
                      <ProjectsIcon />
                      <p
                        className={
                          router.pathname.includes("/o-nas/realizacje") &&
                          styles.active
                        }
                      >
                        Nasze realizacje
                      </p>
                    </li>
                  </Link>

                  <Link href="/o-nas/kontakt">
                    <li
                      className={
                        router.pathname.includes("/o-nas/kontakt") &&
                        styles.active
                      }
                    >
                      <ContactIcon />
                      <p>Kontakt</p>
                    </li>
                  </Link>
                </ul>
              </nav>
            </li>
            <li className={`${styles.menu_item} ${styles.light}`}>
              <Link href="/wspolpraca">
                <a
                  className={
                    router.pathname.includes("/wspolpraca") && styles.active
                  }
                >
                  Współpraca
                </a>
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
