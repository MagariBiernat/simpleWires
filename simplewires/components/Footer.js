import React from "react"
import styles from "./Footer.module.scss"

import { AiOutlineHeart } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="content">
        <div className={styles.Copyrights}>
          <div className="content">
            <p>Copyright &copy; 2021 SimpleWires. All rights reserved</p>
            <p>
              Created By
              <a href="https://github.com/magariBiernat" target="_blank">
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
