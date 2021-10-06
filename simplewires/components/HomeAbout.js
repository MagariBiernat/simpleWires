import React from "react"
import Link from "next/link"
import styles from "./HomeAbout.module.scss"
import { BsCameraVideo as CameraIcon } from "react-icons/bs"
import FadeIn from "@components/FadeIn"
const HomeAbout = () => {
  return (
    <div className={styles.Wrapper}>
      <p>Nasza oferta</p>

      <div className={styles.WrapperContent}>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/7.png" />
            <h4>Systemy monitoringu</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/8.png" />
            <h4>Systemy alarmowe</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/8.png" />
            <h4>Systemy kontroli dostępu oraz czasu pracy</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/8.png" />
            <h4>Instalacje elektryczne</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/8.png" />
            <h4>Okablowanie Strukturalne</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn duration={Math.random() * (1 - 0.5) + 0.5}>
          <div className={styles.Top}>
            <img src="../icons/8.png" />
            <h4>Automatyka Budynkowa</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe? officiis tempore voluptatem debitis ab optio,
            ducimus adipisci saepe?officiis tempore voluptatem debitis ab optio,
            ducimus adipisci saepe? officiis tempore voluptatem debitis ab
            optio, ducimus adipisci saepe?
          </p> */}
          <div className={styles.Bottom}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
              alt=""
            />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default HomeAbout
