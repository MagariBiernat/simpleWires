import React from "react"
import Slider from "react-slick"
import Head from "next/head"
import styles from "./HeadingSlider.module.scss"

//Arrows
import {
  AiOutlineLeft as ArrowLeft,
  AiOutlineRight as ArrowRight,
} from "react-icons/ai"

const MockData = [
  {
    bgColor: "#fff",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    headingTitle: "Sample Awesome Title Raz ",
    paragraphText:
      "lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    buttonColor: "red",
  },
  {
    bgColor: "red",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80",
    headingTitle: "Sample Awesome Title Dwa ",
    paragraphText:
      "lorem ipsu lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumm",
    buttonColor: "green",
  },
  {
    bgColor: "red",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    headingTitle: "Sample Awesome Title Trzy ",
    paragraphText:
      "lorem ipsu lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ",
    buttonColor: "orange",
  },
]

const HeadingSlider = () => {
  const sliderSettings = {
    // outerHeight: "60vh",
    // arrows: false,
    // fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 15000,
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div className={styles.nextArrow} style={{ ...style }} onClick={onClick}>
        <ArrowRight />
      </div>
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div className={styles.prevArrow} style={{ ...style }} onClick={onClick}>
        <ArrowLeft />
      </div>
    )
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/slick.css" />
        <link rel="stylesheet" type="text/css" href="/slick-theme.css" />
      </Head>
      <div className={styles.Wrapper}>
        <Slider {...sliderSettings}>
          {MockData.map((item, index) => (
            <div
              key={index}
              className={styles.sliderElement}
              style={{ background: `url('${item.image}')` }}
            >
              <img src={item.image} />
              <div className={`content ${styles.sliderElement_data}`}>
                <h2>{item.headingTitle}</h2>
                <p>{item.paragraphText}</p>
                <button style={{ background: `${item.buttonColor}` }}>
                  Sprawdź ofertę
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default HeadingSlider
