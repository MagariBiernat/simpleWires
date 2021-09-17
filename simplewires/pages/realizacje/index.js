import React from "react"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
const index = () => {
  const pageMeta = {
    title: "Simple Wires - Nasze realizacje",
    description: "description Nasze realizacje",
  }
  return (
    <Layout pageMeta={pageMeta}>
      O realizacje
      <h2>O realizacje</h2>
    </Layout>
  )
}

export default index
