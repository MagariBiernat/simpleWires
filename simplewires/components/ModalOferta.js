import React from "react"
import styles from "./ModalOferta.module.scss"
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai"
const ModalOferta = ({ oferta, setOferta }) => {
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
      setOferta(null)
    }
  }

  const handleClose = () => {
    setOferta(null)
  }

  if (!oferta) return null
  return (
    <div className={styles.Overlay} ref={overlayRef}>
      <div className={styles.Oferta}>
        <div>
          <CloseIcon className={styles.Close} onClick={handleClose} />

          <h2>{oferta.title}</h2>
          <p>{oferta.modalText}</p>
          <p>{oferta.modalText2}</p>
          <p>{oferta.modalText3}</p>
          <div className={styles.ImagesBottom}>
            {oferta.modalImages.map((item, index) => (
              <img src={item} key={index} alt={`item ${index}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalOferta
