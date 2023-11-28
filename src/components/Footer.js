import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "../imgs/facebook-footer-b.png";
import instagram from "../imgs/instagram-footer-b.png";

const Footer = () => {
  return (
    
    <div className={styles.container}>
      <div>
        <div className={styles.clumn1}>
          <h4>SPECIALTIES</h4>
          <ul>
            <li>
              Certified Hand Therapy
            </li>
            <li>
              Physical Therapy
            </li>
            <li>
              Occupational Therapy
            </li>
            <li>
              Splinting | Custom Orthotics
            </li>
            <li>
              ASTYM®
            </li>
            <li>
              Sports Rehabilitation
            </li>
            <li>
              Additional Services
            </li>
          </ul>
        </div>

        <div className={styles.appointLink}>
          <Link to="contactus"> Book Appointment</Link>
        </div>
      </div>

      <div className={styles.clumn2}>
        <h4>ABOUT US</h4>
        <ul>
          <li>
            Our Approach
          </li>
          <li>
             Our Team
          </li>
           
          <li>
             Our Facility
          </li>
          <li>
              Join Our Team
          </li>
        </ul>

        <h4> PATIENT RESOURCES</h4>
        <ul>
          <li>
             Your First Visit
          </li>
          <li>
            Insurance
          </li>
          <li>
              Billing
          </li>
          <li>
             FAQs
          </li>
        </ul>
      </div>

      <div className={styles.clumn3}>
        <div>
          <h4> CONTACT US</h4>
          <div>
            <span>Phone: </span>
            <a href="tel:2129894263">212-989-HAND (4263)</a>
          </div>

          <div>
            <span>Fax: </span>
            <a href="fax:8665437099"> 866-543-7099</a>
          </div>

          <p>
            89 Fifth Avenue, Suite 803 <br />
            New York, NY 10003
          </p>
        </div>

        <div className={styles.socialIcon}>
          <a href="https://www.facebook.com/Handtherapynyc/">
            <img className={styles.img} src={facebook} />
          </a>
          <a href="https://www.instagram.com/handphysicaltherapynyc/">
            <img className={styles.img} src={instagram} />
          </a>
        </div>
      </div>
      <div className={styles.clumn4}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          width="250"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </div>
    // </Footer>
  );
};

export default Footer;
