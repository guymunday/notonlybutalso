import React from "react";
import styled from "@emotion/styled";
// import { Link } from "gatsby";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const HeaderFlex = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  z-index: 999;
  .logo {
    display: flex;
    flex-wrap: nowrap;
    width: 80%;
    align-items: baseline;
    position: relative;
    overflow: hidden;
    height: 52px;
    margin: auto;
    z-index: 4;
    @media screen and (max-width: 650px) {
      height: 34px;
    }
    @media screen and (max-width: 500px) {
      display: none;
    }
    .no {
      width: 30%;
      text-align: right;
      h1 {
        font-size: 35px;
        font-family: "Inter";
        font-weight: 600;
        padding: 0;
        padding: 3px;
        color: var(--primary);
        @media screen and (max-width: 650px) {
          font-size: 25px;
        }
      }
    }
    .ba {
      width: 30%;
      text-align: left;
      h1 {
        font-size: 35px;
        font-family: "Inter";
        font-weight: 600;
        padding: 0;
        padding: 3px;
        color: var(--primary);
        @media screen and (max-width: 650px) {
          font-size: 25px;
        }
      }
    }

    span {
      display: block;
      height: 3px;
      background: var(--primary);
      margin-top: 9px;
      transform-origin: left center;
      align-self: center;
      @media screen and (max-width: 650px) {
        height: 2px;
      }
    }
  }
  .menu-button {
    width: 10%;
    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      line-height: 1;
      font-weight: 600;
      color: var(--copy);
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <HeaderFlex>
      <ThemeToggle />
      <div className="logo">
        <div className="no">
          {typeof window !== "undefined" && window.location.pathname === "/" ? (
            <motion.h1
              initial={{ y: "-400%", skewY: -40 }}
              animate={{ y: "0", skewY: 0 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            >
              Not Only
            </motion.h1>
          ) : (
            <h1>Not Only</h1>
          )}
        </div>
        <motion.span
          initial={{ width: "0%" }}
          animate={{ width: "40%" }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.8,
          }}
        ></motion.span>
        <div className="ba">
          <motion.h1
            initial={{ y: "400%", skewY: 40 }}
            animate={{ y: "0", skewY: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 1.6,
            }}
          >
            But Also
          </motion.h1>
        </div>
      </div>
      <div className="menu-button">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          {toggleMenu ? "Close" : "Menu"}
        </button>
      </div>
    </HeaderFlex>
  );
};

export default Header;
