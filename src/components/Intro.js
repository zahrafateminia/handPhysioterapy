import React from "react";
import styles from  "../components/Intro.module.css";

const Intro = (props) => {
  return (
    <div className={styles.container}>
       <div className={styles.picIntro}>
        <img src={props.picture} />
      </div>
      <div className={styles.textIntro}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a className={styles.btnbook}>Learn more</a>
      </div>
     
    </div>
  );
};

export default Intro;
