import React from "react";
import { Carousel } from "antd";
import styles from "@/styles/Banner.module.css";


const Banner = () => (
  <Carousel autoplay>
    <div className={styles["carousel-item"]}>
      <img
        src="https://i.ibb.co/y8VkJSz/banner1.jpg"
        alt="image"
        className={styles["carousel-image"]}
      />
    </div>
    <div className={styles["carousel-item"]}>
      <img
        src="https://i.ibb.co/DDw3Qt2/banner2.jpg"
        alt="image"
        className={styles["carousel-image"]}
      />
    </div>
  </Carousel>
);

export default Banner;


