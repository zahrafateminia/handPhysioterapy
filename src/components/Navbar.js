import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../imgs/HandTherapyNYCPhysicalTherapyNYC-Logo.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
// import { useRef } from "react"

const DIV = styled.div`
  display: flex;
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px 10px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (max-width: 780px) {
    justify-content: space-between;
  }
`;
const UL = styled.ul`
  display: flex;
  margin-right: 15px;
  li {
    margin-right: 10px;
    // margin-left: 25px;
    list-style-type: none;
    text-decoration: none;
  }
  a {
    cursor: pointer;
  }
  p {
    border-top: 0.5px solid gray;
    padding: 7px 15px;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    li {
      padding-top: 10px;
      color: #fff;
    }
  }
`;
const Div2 = styled.div`
  display: flex;
  position: relative;
  z-index: 10;
  @media (max-width: 780px) {
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: rgb(0, 158, 198);
    width: 280px;
    height: 300px;
    transition: all 0.5s linear;
    transform: ${(props) =>
      props.open ? "translateX(0)" : "translateX(100%)"};
  }
`;

const Navbar = ({ open }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  const scrollToMeetOUrTeam = () => {
    let width = window.innerWidth;
    if ((width) => 550) {
      window.scrollTo(700, 600);
    } else {
      window.scrollTo(400, 450);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const scrollFacility = () => {
    let width = window.innerWidth;
    if ((width) => 550) {
      window.scrollTo(700, 5000);
    } else {
      window.scrollTo(900, 2500);

    }
  };

  const [isActive, setIsActive] = useState(false);

  const ChangeStyle = () => {
    setIsActive(true);
  };

  const handleClick = () => {
    scrollToTop();
    ChangeStyle();
  };
  const goClick = () => {
    let width = window.innerWidth;
    if ((width) => 550) {
      window.scrollTo(360, 600);
    } else {
      window.scrollTo(400, 450);
    }
  };
const goToFAQ = () => {
    let width = window.innerWidth;
    if ((width) => 550) {
      window.scrollTo(300, 1300);
    } else {
      window.scrollTo(700, 1200);
    }
  };

  return (
    <DIV>
      <div>
        <Link>
          <img className={styles.logo} src={logo} />
        </Link>
      </div>
      <Div2 open={open}>
        <UL>
          <li className={styles.navItem}>
            <Link
              className={styles.link}
              onClick={() => handleClick()}
              to="/"
              style={{
                border: isActive && pathname == "/" ? "1px dotted gray" : "",
                padding: "5px",
              }}
            >
              Welcome
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              className={styles.link}
              to="/blog"
              onClick={handleClick}
              style={{
                border:
                  isActive && pathname == "/blog" ? "1px dotted gray" : "",
                padding: "5px",
              }}
            >
              Blog
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link
              className={styles.link}
              onClick={() => scrollToTop()}
              to="/aboutus"
              style={{
                border:
                  isActive && pathname == "/aboutus" ? "1px dotted gray" : "",
                padding: "5px",
              }}
            >
              About Us
            </Link>
            <div className={styles.product}>
              <Link className={styles.link}>
                <p className={styles.productItem}>Our Approach</p>
              </Link>
              <Link
                to="aboutus"
                className={styles.link}
                onClick={() => scrollFacility()}
              >
                <p className={styles.productItem}>Our Facility</p>
              </Link>
              <Link
                to="aboutus"
                className={styles.link}
                onClick={() => scrollToMeetOUrTeam()}
              >
                <p className={styles.productItem}>Meet Our Team </p>
              </Link>

              <Link to="JoinUs" className={styles.link}>
                <p className={styles.productItem}>Join Our Team </p>
              </Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link
              to="patientresource"
              className={styles.link}
              style={{
                border:
                  isActive && pathname == "/patientresource"
                    ? "1px dotted gray"
                    : "",
                padding: "5px",
              }}
            >
              Patient Resource
            </Link>
            <div className={styles.product}>
              <Link className={styles.link} to="patientresource">
                <p className={styles.productItem} onClick={() => goClick()}>
                  Your first visit
                </p>
              </Link>
              <Link className={styles.link} to="patientresource" onClick={() => goClick()}>
                <p className={styles.productItem}>Insurance</p>
              </Link>
              <Link to="patientresource" className={styles.link} onClick={() => goClick()}>
                <p className={styles.productItem}>Billing</p>
              </Link>

              <Link className={styles.link} to="patientresource" onClick={() => goToFAQ()}>
                <p className={styles.productItem}>FAQs</p>
              </Link>
            </div>
          </li>

          <li className={styles.navItem}>
            <Link
              className={styles.link}
              to="/contactus"
              onClick={() => handleClick()}
              style={{
                border:
                  isActive && pathname == "/contactus" ? "1px dotted gray" : "",
                padding: "5px",
              }}
            >
              Contact Us
            </Link>
          </li>
        </UL>

        <div>
          <Link to="/contactus" className={styles.btnbook}>
            Book an appointment
          </Link>
        </div>
      </Div2>
    </DIV>
  );
};

export default Navbar;
