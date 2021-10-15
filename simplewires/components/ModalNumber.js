import React from "react"
import FadeIn from "./FadeIn"
import styles from "./ModalNumber.module.scss"
import Slide from "./Slide"

const ModalNumber = ({ setModal }) => {
  const [phone, setPhone] = React.useState("")
  const overlayRef = React.useRef(null)

  React.useEffect(() => {
    if (document) {
      document.addEventListener("click", handleClickOutside)

      return () => {
        document.removeEventListener("click", handleClickOutside)
      }
    }
  })

  const handleClickOutside = (e) => {
    if (overlayRef.current === e.target) {
      setModal(null)
    }
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()

    if (phone.length <= 6) {
      alert("Podaj numer !")
    }
    alert(phone)
  }
  return (
    <div className={styles.Overlay} ref={overlayRef}>
      <FadeIn duration={0.6}>
        <div className={styles.Wrapper}>
          <form action="" onSubmit={handleSubmitForm}>
            <div className={styles.Grid}>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="Np. 123456789"
                onChange={(e) => setPhone(e.target.value)}
              />{" "}
              <br />
              <button type="submit">Zostaw numer !</button>
            </div>
          </form>
        </div>
      </FadeIn>
    </div>
  )
}

export default ModalNumber
