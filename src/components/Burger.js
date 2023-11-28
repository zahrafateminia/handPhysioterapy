import Navbar from "./Navbar";
import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 150;
  display: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${(props) => (props.open ? "#fff" : "#1565df")};
    border-radius: 10px;
    transform-origin: 1px;
    transition:all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
      &:nth-child(2) {
      transform: ${(props) =>
        (props.open ? "translateX(-100%)" : "translateX(0)")};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Div open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Div>

      <Navbar open={open} />
    </div>
  );
};

export default Burger;
