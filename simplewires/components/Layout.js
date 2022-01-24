import SEO from "./SEO"
import Navigation from "./Navigation"
import styles from "./Layout.module.scss"
import Footer from "./Footer"
import ContactSide from "./ContactSide"
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent"

export default function Layout({ children, pageMeta, modalOpen }) {
  console.log(getCookieConsentValue())

  return (
    <div className={`${styles.MainWrapper} ${styles.OverflowHidden}`}>
      {modalOpen && (
        <style jsx global>{`
          html,
          body {
            position: fixed;
            overflow-y: hidden !important;
          }

          @media (min-width: 968px) {
            html,
            body {
              overflow-y: hidden !important;
              position: absolute !important;
            }
          }
        `}</style>
      )}
      <SEO
        title={pageMeta.title}
        descripton={pageMeta.descripton}
        url={pageMeta.url}
      />
      <Navigation />
      <main className={modalOpen && styles.OverflowHidden}>{children}</main>
      <ContactSide />
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        buttonText="Akceptuje"
        cookieName="simpleWiresCookiesAgreementWebsiteCookie"
        style={{ background: "#2B2b2B" }}
        buttonStyle={{ color: "#bb553b", fontSize: "18px" }}
        expires={150}
      >
        Ta strona korzysta z plików cookie.{" "}
      </CookieConsent>
    </div>
  )
}
