import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./Navigation.module.scss"
import { RiContactsLine as ContactIcon } from "react-icons/ri"
import { HiOutlineOfficeBuilding as OfficeIcon } from "react-icons/hi"
import { GrProjects as ProjectsIcon } from "react-icons/gr"
import Logo from "@public/images/simplewires.png"
const Navigation = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <img onClick={() => router.push("/")} src={Logo} />
        </div>
        <div className={styles.menu_mobile}>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a
                    className={
                      router.pathname === "/" ? styles.active : undefined
                    }
                  >
                    Strona Główna
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/realizacje">
                  <a
                    className={
                      router.pathname.includes("/realizacje")
                        ? styles.active
                        : undefined
                    }
                  >
                    Nasze realizacje
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wspolpraca">
                  <a
                    className={
                      router.pathname.includes("/wspolpraca")
                        ? styles.active
                        : undefined
                    }
                  >
                    Wspolpraca
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wsparcie">
                  <a
                    className={
                      router.pathname.includes("/wsparcie")
                        ? styles.active
                        : undefined
                    }
                  >
                    Wsparcie
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/o-firmie">
                  <a
                    className={
                      router.pathname.includes("/o-firmie")
                        ? styles.active
                        : undefined
                    }
                  >
                    O firmie
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/kontakt">
                  <a
                    className={
                      router.pathname.includes("/kontakt")
                        ? styles.active
                        : undefined
                    }
                  >
                    Kontakt
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/oferta">
                  <a
                    className={
                      router.pathname.includes("/oferta")
                        ? styles.active
                        : undefined
                    }
                  >
                    Oferta
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.menu}>
          <ul className={styles.menu_list}>
            <li className={styles.menu_item}>
              <Link href="/">
                <a
                  className={
                    router.pathname === "/" ? styles.active : undefined
                  }
                >
                  Strona Główna
                </a>
              </Link>
            </li>
            <li className={styles.menu_item}>
              <Link href="/oferta">
                <a
                  className={
                    router.pathname.includes("/oferta")
                      ? styles.active
                      : undefined
                  }
                >
                  Oferta
                </a>
              </Link>
            </li>
            <li className={`${styles.menu_item}`}>
              <Link href="/wsparcie">
                <a
                  className={
                    router.pathname.includes("/wsparcie")
                      ? styles.active
                      : undefined
                  }
                >
                  Wsparcie
                </a>
              </Link>
            </li>
            <li className={`${styles.menu_item} ${styles.light}`}>
              <a
                className={
                  router.pathname.includes(
                    "/kontakt" || "/o-firmie" || "/realizacje"
                  )
                    ? styles.active
                    : undefined
                }
              >
                O nas
              </a>
              <nav className={styles.menu_dropdown}>
                <ul>
                  <Link href="/o-firmie">
                    <li
                      className={
                        router.pathname.includes("/o-firmie")
                          ? styles.active
                          : undefined
                      }
                    >
                      <OfficeIcon />
                      <p>O firmie</p>
                    </li>
                  </Link>
                  <Link href="/realizacje">
                    <li
                      className={
                        router.pathname.includes("/realizacje")
                          ? styles.active
                          : undefined
                      }
                    >
                      <ProjectsIcon />
                      <p>Nasze realizacje</p>
                    </li>
                  </Link>

                  <Link href="/kontakt">
                    <li
                      className={
                        router.pathname.includes("/kontakt")
                          ? styles.active
                          : undefined
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
                    router.pathname.includes("/wspolpraca")
                      ? styles.active
                      : undefined
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
