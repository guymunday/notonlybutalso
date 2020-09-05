import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

const HeaderFlex = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  overflow: hidden;
  height: 72px;
  background: #ffffff;
  margin: auto;
  .no {
    width: 30%;
    display: flex;
    text-align: center;
    h1 {
      font-weight: 60px;
      padding: 0;
      padding: 3px;
    }
  }
  .ba {
    width: 30%;
    text-align: center;
    h1 {
      font-weight: 60px;
      padding: 0;
      padding: 3px;
    }
  }
  .dash {
    display: flex;
    width: 50%;
    span {
      display: block;
      flex-grow: 1;
      height: 3px;
      background: #000;
      margin: 32px 0;
      transform-origin: left center;
    }
  }
`;

const HomepageHero = () => {
  return (
    <HeaderFlex>
      <div className="no">
        <motion.h1
          initial={{ y: "-200%" }}
          animate={{ y: "0" }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
        >
          Not Only
        </motion.h1>
      </div>
      <motion.div
        className="dash"
        initial={{ width: "0" }}
        animate={{ width: "50%" }}
        transition={{
          duration: 0.8,
          ease: [0.6, 0.05, -0.01, 0.9],
          delay: 0.8,
        }}
      >
        <motion.span
          initial={{ flexGrow: "0" }}
          animate={{ flexGrow: "1" }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 0.8,
          }}
        ></motion.span>
      </motion.div>
      <div className="ba">
        <motion.h1
          initial={{ y: "200%" }}
          animate={{ y: "0" }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 1.6,
          }}
        >
          But Also
        </motion.h1>
      </div>
    </HeaderFlex>
  );
};

export default HomepageHero;
