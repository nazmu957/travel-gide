import React from "react";
import { Carousel } from "antd";
import styles from "@/styles/Banner.module.css";
import New from "@/assets/images/banner-images/banner4.jpg";
import Offer from "@/assets/images/banner-images/banner3.jpg";
import Image from "next/image";

const Banner = () => (
  <Carousel autoplay>
    <div className={styles["carousel-item"]}>
      <img
        src="https://tomap-elementor.travelerwp.com/wp-content/uploads/2014/11/new-york-city-skyline-at-dusk-zo-cf1a9c35.jpg"
        alt="image"
        className={styles["carousel-image"]}
      />
    </div>
    <div className={styles["carousel-item"]}>
      <img
        src="https://tomap-elementor.travelerwp.com/wp-content/uploads/2015/02/cheapest-car-insurance-in-new-jersey-nj-story.jpg"
        alt="image"
        className={styles["carousel-image"]}
      />
    </div>
  </Carousel>
);

export default Banner;
