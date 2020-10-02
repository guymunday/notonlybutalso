import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import SvgLogo from "./SvgLogo";
import { Link } from "gatsby";

const HeaderFlex = styled.header`
  .menu-button {
    position: fixed;
    top: 7px;
    right: 16px;
    z-index: 999;
    button {
      font-size: 16px;
      font-family: var(--text2);
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
      font-weight: 400;
      color: var(--copy);
      transition: 0.2s ease color;
      :hover {
        color: var(--primary);
      }
    }
  }
  .svg-logo {
    width: 70px;
    margin: auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 500px) {
      display: none;
    }
  }
`;

const Header = ({ toggleMenu, setToggleMenu }) => {
  return (
    <>
      <Logo />
      <HeaderFlex>
        <Link to="/" className="svg-logo">
          <SvgLogo color="var(--header)" size="60" />
        </Link>
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
