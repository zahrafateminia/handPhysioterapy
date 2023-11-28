import React from "react";
import styles from "./Introduce.module.css";

const Introduce = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textIntro}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a>Learn more</a>
      </div>
      <div className={styles.picIntro}>
        <img src={props.picture} />
      </div>
    </div>
  );
};

export default Introduce;
