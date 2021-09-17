import React from "react"
import Link from "next/link"
import styles from "./ContactSide.module.scss"
import { FaFacebookF, FaGooglePlusG, FaPhone } from "react-icons/fa"

const ContactSide = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Facebook}>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <div className={styles.Google}>
        <a href="https://google.com" rel="noreferrer" target="_blank">
          <FaGooglePlusG />
        </a>
      </div>

      <Link href="/kontakt" passHref={true}>
        <div className={styles.Phone}>
          <FaPhone />
        </div>
      </Link>
    </div>
  )
}
export default ContactSide
