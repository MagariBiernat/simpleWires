import SEO from "@components/SEO"
import Navigation from "@components/Navigation"
import styles from "./Layout.module.scss"
import Footer from "./Footer"

export default function Layout({ children, pageMeta }) {
  return (
    <div className={styles.MainWrapper}>
      <SEO
        title={pageMeta.title}
        descripton={pageMeta.descripton}
        url={pageMeta.url}
      />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
