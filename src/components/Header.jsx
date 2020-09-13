import React from "react";
import styled from "@emotion/styled";
// import { Link } from "gatsby";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const HeaderFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
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
    @media screen and (max-width: 600px) {
      height: 34px;
    }
    .no {
      width: 30%;
      text-align: right;
      h1 {
        font-size: 35px;
        padding: 0;
        padding: 3px;
        @media screen and (max-width: 600px) {
          font-size: 25px;
        }
      }
    }
    .ba {
      width: 30%;
      text-align: left;
      h1 {
        font-size: 35px;
        padding: 0;
        padding: 3px;
        @media screen and (max-width: 600px) {
          font-size: 25px;
        }
      }
    }

    span {
      display: block;
      height: 3px;
      background: #000;
      margin: 32px 0;
      transform-origin: left center;
      align-self: center;
      @media screen and (max-width: 600px) {
        height: 2px;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderFlex>
      <ThemeToggle />
      <div className="logo">
        <div className="no">
          <motion.h1
            initial={{ y: "-400%", skewY: -40 }}
            animate={{ y: "0", skewY: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            Not Only
          </motion.h1>
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
      <div style={{ width: "10%" }}>
        <button>Menu</button>
      </div>
    </HeaderFlex>
  );
};

export default Header;
