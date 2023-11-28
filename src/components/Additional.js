import React from "react";
import styles from "../components/Additional.module.css";
import Card from "./Card";
import Certified from "../imgs/Certified-Hand-Therapists.webp";
import Astym from '../imgs/ASTYM-1.webp';
import Splinting from "../imgs/Splinting-Custom-Orthotics-1.png";
import Sports from "../imgs/Sports-Rehab-1.png";

const Additional = (props) => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.tilte}> Additional Therapy, Specialties + Services
</h1>
<div className={styles.Additional}>
      <Card
        pic={Certified}
        descrip="Certified Hand Therapists"
      />
      <Card
        pic={Splinting}
        descrip="Splinting | Custom Orthotics"
      />

      <Card
        pic={Astym} descrip="ASTYM®"
      />

      <Card
        pic={Sports}
        descrip="Sports Rehab"
      />
      </div>
      <div>

      <a className={styles.link}>More Services Here </a>
      </div>
    </div>
  );
};

export default Additional;
