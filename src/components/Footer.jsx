import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SvgLogo from "./SvgLogo";
import Email from "./Email";

const StyledFooter = styled(motion.footer)`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  z-index: -1;
  .footer-padding {
    width: 100%;
    height: 100%;
    .footer-inner {
      background: var(--pink);
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      p {
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--offwhite);
      }
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
          <SvgLogo color="var(--offwhite)" size="100" />
          <p>© Not Only — But Also 2020</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
