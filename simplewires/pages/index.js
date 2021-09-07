import Layout from "@components/Layout"
import styles from "../styles/Home.module.css"

export default function Home() {
  const pageMeta = {
    title: "SimpleWires - Home",
    description: "",
  }

  return (
    <Layout pageMeta={pageMeta}>
      <div
        style={{
          height: "700px",
          background:
            "url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)",
        }}
      >
        {" "}
      </div>
      <div style={{ height: "200px", background: "blue" }}></div>
    </Layout>
  )
}
