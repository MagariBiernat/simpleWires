import React from "react"
import styles from "./Tiles.module.scss"

const MockData = [
  {
    subTitle: "Lorem ipsum dolem ipsum lorem lorem",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)",
    color: "#ffffff",
  },
  {
    subTitle: "Lorem ipsum dolem ipsum",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1586772002345-339f8042a777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)",
    color: "#ffffff",
  },
  {
    subTitle: "Lorem ipsum dolem ipsum",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1599949104055-2d04026aee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80)",
    color: "#ffffff",
  },
  {
    subTitle: "Lorem ipsum dolem ipsum",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1582773427596-89ed5298e255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)",
    color: "#ffffff",
  },
  ,
  {
    subTitle: "Lorem ipsum dolem ipsum",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1586772002345-339f8042a777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)",
    color: "#ffffff",
  },
  {
    subTitle: "Lorem ipsum dolem ipsum",
    mainTitle: "Main title sample",
    buttonText: "Więcej",
    bgColor: "#ffffff",
    bgImage:
      "url(https://images.unsplash.com/photo-1599949104055-2d04026aee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80)",
    color: "#ffffff",
  },
]

const Tiles = () => {
  return (
    <div className={styles.TilesWrapper}>
      <div className="content">
        <div className={styles.Tiles}>
          {MockData.map((item, index) => (
            <div
              key={index}
              className={styles.Tile}
              style={{
                color: item.color,
                background: item.bgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={styles.Overlay}></div>
              <div className={styles.TileDetails}>
                <p>{item.subTitle}</p>
                <h6>{item.mainTitle}</h6>
                <button
                  style={{
                    border: `2px solid ${item.color} `,
                    color: item.color,
                  }}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tiles
