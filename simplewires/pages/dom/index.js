import React from "react"
import Layout from "@components/Layout"
import styles from "./index.module.scss"
const index = () => {
  const pageMeta = {
    title: "Simple Wires - Dla Domu",
    description: "dla domu",
  }
  return (
    <Layout pageMeta={pageMeta}>
      <header className={styles.Header}>
        <h1>
          Rozwiązania dla <br />
          <span>
            <span className={styles.BorderBottomRed}>Twojego</span> domu
          </span>
        </h1>
      </header>
      <div className={` ${styles.Content} ${styles.White}`}>
        <div className={styles.Section}>
          <div className={styles.SectionContent}>
            <h1>Alarm</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus voluptatem, dolor eligendi debitis fugiat inventore
              voluptatibus nemo tenetur corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?
            </p>
          </div>
          <div className={styles.Image}>
            <img
              src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.Section} ${styles.Grey}`}>
          <div className={styles.SectionContent}>
            <h1>Monitoring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus voluptatem, dolor eligendi debitis fugiat inventore
              voluptatibus nemo tenetur corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde? corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?
            </p>
          </div>
          <div className={`${styles.Image} ${styles.BoxGrey}`}>
            <img
              src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.Section} ${styles.Reverse}`}>
          <div className={styles.SectionContent}>
            <h1>Okablowanie</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus voluptatem, dolor eligendi debitis fugiat inventore
              voluptatibus nemo tenetur corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?
            </p>
          </div>
          <div className={styles.Image}>
            <img
              src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.Section}`}>
          <div className={styles.SectionContent}>
            <h1>Okablowanie</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus voluptatem, dolor eligendi debitis fugiat inventore
              voluptatibus nemo tenetur corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?
            </p>
          </div>
          <div className={styles.Image}>
            <img
              src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
        </div>
        <div className={`${styles.Section} ${styles.Reverse}`}>
          <div className={styles.SectionContent}>
            <h1>Okablowanie</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              necessitatibus voluptatem, dolor eligendi debitis fugiat inventore
              voluptatibus nemo tenetur corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?corporis neque temporibus praesentium
              dignissimos perferendis amet nostrum blanditiis quam porro
              sapiente at placeat culpa alias et. Commodi facere natus
              distinctio, cumque nam quod molestias, corporis perferendis et
              dignissimos ipsa unde?
            </p>
          </div>
          <div className={styles.Image}>
            <img
              src="https://images.unsplash.com/photo-1528312635006-8ea0bc49ec63?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1976&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default index
