import React from "react";
import styles from "./List.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const List = () => {
  return (
    <div>
      <div className={styles.images}>
        <img src="/sliced_piza.png" alt="" className={styles.piza} />
        <div className={styles.menu}>
          <h3 className={styles.h3}>Best Food</h3>
          <h2 className={styles.h2}>Popular Food Items</h2>
          <Carousel responsive={responsive}>
            <div className={styles.card}>
              <img src="/food.png" alt="" />
              <h3>Chicken Fired Rice</h3>
              <p>The Registration Fee</p>
              <p>$20.99</p>
            </div>
            <div className={styles.card}>
              <img src="/piza.png" alt="" height={160} width={160}/>
              <h3>Chicken Pizza</h3>
              <p>The Registration Fee</p>
              <p>$20.99</p>
            </div>
            <div className={styles.card}>
              <img src="/food.png" alt="" />
              <h3>Chicken Fired Rice</h3>
              <p>The Registration Fee</p>
              <p>$20.99</p>
            </div>
            <div className={styles.card}>
              <img src="/piza.png" alt="" height={160} width={160}/>
              <h3>Egg and Cucumber</h3>
              <p>The Registration Fee</p>
              <p>$20.99</p>
            </div>
          </Carousel>
        </div>
        <img src="/burger.png" alt="" className={styles.burger} />
      </div>
    </div>
  );
};

export default List;
