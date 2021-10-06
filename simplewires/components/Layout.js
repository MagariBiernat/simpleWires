import SEO from "./SEO"
import Navigation from "./Navigation"
import styles from "./Layout.module.scss"
import Footer from "./Footer"
import ContactSide from "./ContactSide"

export default function Layout({ children, pageMeta, modalOpen }) {
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
    </div>
  )
}
