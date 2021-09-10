import Layout from "./../components/Layout"

import { SITE_DOMAIN } from "./../util/constants"

export default function Cztery0Cztery() {
  const pageMeta = {
    title: "Oops! Ta strona nie istnieje ! - SimpleWires",
    descroption: "Error 404",
    url: `${SITE_DOMAIN}/404`,
  }

  return <Layout pageMeta={pageMeta}>404</Layout>
}
