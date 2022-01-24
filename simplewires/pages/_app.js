import "../styles/globals.scss"
import "../styles/normalize.scss"
import "../styles/sassStyles/_typography.scss"
import "../styles/sassStyles/_variables.scss"
import smoothscroll from "smoothscroll-polyfill"

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    smoothscroll.polyfill()
  }
  return <Component {...pageProps} />
}

export default MyApp
