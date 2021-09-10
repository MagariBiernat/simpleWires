import Layout from "@components/Layout"
import styles from "../styles/Home.module.scss"
import HeadingSlider from "@components/HeadingSlider"
import Tiles from "@components/Tiles"
import HomeContactUs from "@components/HomeContactUs"

export default function Home() {
  const pageMeta = {
    title: "SimpleWires - Home",
    description: "",
  }

  return (
    <Layout pageMeta={pageMeta}>
      <HeadingSlider />
      <Tiles />
      <HomeContactUs />
    </Layout>
  )
}
