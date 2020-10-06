import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const LogoContainer = styled.div`
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
    height: 40px;
    margin: auto;
    z-index: 4;
    text-decoration: none;
    @media screen and (max-width: 500px) {
      display: none;
    }
    .no {
      width: 30%;
      text-align: right;
    }
    .ba {
      width: 30%;
      text-align: left;
    }

    span {
      display: block;
      height: 2px;
      background: var(--header);
      margin-top: -2px;
      transform-origin: left center;
      align-self: center;
    }
  }
  .logo-h1 {
    a {
      white-space: nowrap;
      font-size: 25px;
      font-family: "Inter";
      font-weight: 600;
      padding: 0;
      padding: 3px;
      text-decoration: none;
      color: var(--header);
    }
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <div className="logo">
        <div className="no">
          <motion.h1
            className="logo-h1"
            initial={{ y: "-400%", skewY: -40, opacity: 0 }}
            animate={{ y: "0", skewY: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 0.3,
           }}
          >
            <Link to="/">Not Only</Link>
          </motion.h1>
        </div>
        <motion.span
          initial={{ width: "0%" }}
          animate={{ width: "40%" }}
          transition={{
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: 1.3,
          }}
        ></motion.span>
        <div className="ba">
          <motion.h1
            className="logo-h1"
            initial={{ y: "-400%", skewY: -40, opacity: 0 }}
            animate={{ y: "0", skewY: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9],
              delay: 2.3,
            }}
          >
            <Link to="/">But Also</Link>
          </motion.h1>
        </div>
      </div>
    </LogoContainer>
  );
};

export default Logo;
