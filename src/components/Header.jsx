import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

const HeaderFlex = styled.header`
  .menu-button {
    position: fixed;
    top: 12px;
    right: 16px;
    z-index: 999;
    @media screen and (max-width: 650px) {
      top: 6px;
    }
    button {
      font-size: 16px;
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      font-weight: 600;
      color: var(--copy);
    }
  }
`;

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <Logo />
      <HeaderFlex>
        <ThemeToggle />
        <div className="menu-button">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? "close" : "menu"}
          </motion.button>
        </div>
      </HeaderFlex>
    </>
  );
};

export default Header;
