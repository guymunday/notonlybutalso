import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledFooter = styled(motion.footer)`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 500px;
  display: flex;
  .footer-padding {
    width: 100%;
    height: 100%;
    padding: 30px;
    .footer-inner {
      background: var(--bg);
      border: 2px solid var(--copy);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

const duration = 1;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    y: 100,
    transition: { duration: duration, delay: duration },
  },
};

const Footer = () => {
  return (
    <StyledFooter
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="footer-padding">
        <div className="footer-inner">
          <h2>Footer</h2>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
