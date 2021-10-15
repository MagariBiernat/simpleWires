import React from "react"
import Link from "next/link"
import styles from "./HomeAbout.module.scss"
import stylesFromOferta from "../pages/oferta/index.module.scss"
import { BsCameraVideo as CameraIcon } from "react-icons/bs"
import FadeIn from "@components/FadeIn"

import SystemyMonitoringuImg from "@public/images/kamera2.jpg"
import SystemyAlarmoweImg from "@public/images/alarm.jpg"
import SysKontroliCzasuImg from "@public/images/zegar2.jpg"
import InstalacjeElekImg from "@public/images/przewody.jpg"
import OkablowanieImg from "@public/images/kable3.jpg"
import AutomatykaImg from "@public/images/biuro.jpg"

const HomeAbout = () => {
  return (
    <div className={styles.Wrapper}>
      <p>Nasza oferta</p>

      <div className={styles.WrapperContent}>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/7.png" />
            <h4>Systemy monitoringu</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={SystemyMonitoringuImg} alt="" />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/8.png" />
            <h4>Systemy alarmowe</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={SystemyAlarmoweImg} alt="" />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/8.png" />
            <h4>Systemy kontroli dostępu oraz czasu pracy</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={SysKontroliCzasuImg} alt="" />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/8.png" />
            <h4>Instalacje elektryczne</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={InstalacjeElekImg} alt="" />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/8.png" />
            <h4>Okablowanie Strukturalne</h4>
            <div></div>
          </div>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            iusto sed officiis tempore voluptatem debitis ab optio, ducimus
            adipisci saepe?
          </p> */}
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={OkablowanieImg} alt="" />
            <Link href="/oferta">
              <button>Sprawdź</button>
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          duration={Math.random() * (1 - 0.5) + 0.5}
          className={stylesFromOferta.ContentElement}
        >
          <div className={stylesFromOferta.Top}>
            <img rel="preload" src="../icons/8.png" />
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
          <div className={stylesFromOferta.Bottom}>
            <img rel="preload" src={AutomatykaImg} alt="" />
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
