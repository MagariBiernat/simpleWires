import SEO from "@components/SEO"
import Navigation from "@components/Navigation"

export default function Layout({ children, pageMeta }) {
  return (
    <div>
      <SEO
        title={pageMeta.title}
        descripton={pageMeta.descripton}
        url={pageMeta.url}
      />
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
