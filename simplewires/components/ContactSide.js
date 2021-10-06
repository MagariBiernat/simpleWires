import React from "react"
import Link from "next/link"
import styles from "./ContactSide.module.scss"
import { FaFacebookF, FaPhone } from "react-icons/fa"
import { AiOutlineGoogle } from "react-icons/ai"

const ContactSide = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Facebook}>
        <a href="https://facebook.com" rel="noreferrer" target="_blank">
          <FaFacebookF />
        </a>
      </div>
      <Link href="/kontakt" passHref={true}>
        <div className={styles.Phone}>
          <FaPhone />
        </div>
      </Link>
      <div className={styles.Google}>
        <a
          href="https://g.page/r/CYG0C28KSn47EAE "
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGoogle />
        </a>
      </div>
    </div>
  )
}
export default ContactSide
