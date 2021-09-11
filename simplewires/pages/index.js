import Layout from "./../components/Layout"
import HeadingSlider from "./../components/HeadingSlider"
import Tiles from "./../components/Tiles"
import HomeContactUs from "./../components/HomeContactUs"
import HomeAbout from "../components/HomeAbout"

export default function Home() {
  const pageMeta = {
    title: "SimpleWires - Home",
    description: "",
  }

  return (
    <Layout pageMeta={pageMeta}>
      <HeadingSlider />
      <HomeAbout />
      <Tiles />
      <HomeContactUs />
    </Layout>
  )
}
