import React from "react";
import styles from "./Banner.module.css";
 
const Banner = (props) => {
  return (
    <div className={styles.container}>
      <img src={props.pic} />
      <div className={styles.description}>
        <h1>{props.title}</h1>
        <h2>{props.h2}</h2>
      </div>
    </div>
  );
};

export default Banner;

