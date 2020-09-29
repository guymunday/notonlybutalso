import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SvgLogo from "./SvgLogo";

const StyledFooter = styled(motion.footer)`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 300px;
  display: flex;
  .footer-padding {
    width: 100%;
    height: 100%;
    .footer-inner {
      background: var(--pink);
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
          <SvgLogo color="var(--offwhite)" size="300" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
