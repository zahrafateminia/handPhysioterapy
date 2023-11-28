import React from "react";
import styles from "../components/Know.module.css";
const Know = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      <p>{props.des}</p>
      
      
      <a className={styles.link}>{props.link}</a>
    </div>
  );
};

export default Know;
