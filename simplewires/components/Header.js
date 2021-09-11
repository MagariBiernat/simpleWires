import React from "react"
import styles from "./Header.module.scss"

const Header = ({ title, paragraph, buttonColor, buttonText }) => {
  return <div className={styles.Wrapper}>{title}</div>
}

export default Header
