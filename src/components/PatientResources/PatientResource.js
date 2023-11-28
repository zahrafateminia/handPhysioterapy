import React, { useEffect } from "react";
import BasicAccordion from "../BasicAccordion";
import handtherapy from "../../imgs/handtherapy.jpg";
import styles from "./patientResources.module.css";
import { useRef } from "react";

const PatientResource = () => {
  const ref = useRef(null);

  useEffect(() => {
    document.title = " Patient Resource";
  }, []);

  return (
    <div>
      <div className={styles.handtherapy}>
        <img src={handtherapy} />
        <h1 className={styles.patient}>Patient Resources</h1>
      </div>

      <div className={styles.Lets}>
        <h1> Let’s Get Started</h1>
      </div>

      <div ref={ref} className={styles.container}>
        <div className={styles.billing}>
          <h2>Preparing For Your First Visit</h2>
          <p>
            Welcome to Hand + Physical Therapy NYC. No matter what brings you to
            Hand + Physical Therapy NYC, we want you to have the best experience
            possible.
            <br />
            <br />
            Once you make your appointment, we will email you our New Patient
            Forms. These forms can be completed online and submitted prior to
            your first appointment. Please try to arrive about 10 minutes early
            to your first appointment so that we can check you in and verify all
            of the proper forms have been submitted. Also, choose clothing that
            is easy to move around in. If you have shoulder pain, wear a shirt
            that allows access to your shoulder and arm. Shorts should be worn
            if you have hip pain, knee pain, or ankle pain.
          </p>
        </div>
        <div className={styles.billing}>
          <h2>insurance</h2>
          <p>
            We are pleased to work with most insurance companies. However,
            because each plan and policy can be different within an insurance
            company, it is best for our insurance department to verify your
            coverage for you. In most cases, even if we are out of your
            insurance network, you will only be responsible for your co-payment.
            <br />
            <br />
            We are pleased to work with most insurance companies. However,
            because each plan and policy can be different within an insurance
            company, it is best for our insurance department to verify your
            coverage for you. In most cases, even if we are out of your
            insurance network, you will only be responsible for your co-payment.
          </p>
        </div>
        <div className={styles.billing}>
          <h2> Billing</h2>
          <p className={styles.pay}>
            To pay your Hand + Physical Therapy NYC bill, please access our
            payment portal below, Of course, if you have any billing questions,
            feel free to <a href="tel:123-456-7890"> call us.</a>
            <br />
            <h5>
              {" "}
              <a href="https://securecnp.com/payment/handtnyc">PAY MY BILL</a>
            </h5>
          </p>
        </div>
      </div>

      <BasicAccordion />
    </div>
  );
};

export default PatientResource;
