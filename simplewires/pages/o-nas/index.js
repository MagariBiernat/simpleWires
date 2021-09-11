import React from "react"
import Header from "../../components/Header"
import Layout from "./../../components/Layout"

const MockData = {
  title: "Kontakt",
  paragraph: "lorem ipsum dolem trolem dolem ipsum",
  buttonColor: "#234122",
  buttonText: "Porozmawiajmy o twoim projekcie",
}

const index = () => {
  const pageMeta = {
    title: "Simple Wires - O nas",
    description: "description",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <Header {...MockData} />
    </Layout>
  )
}

export default index
