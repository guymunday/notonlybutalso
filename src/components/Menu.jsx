import React, { useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import Logo from "./Logo";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--bg);
  z-index: 998;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Menu = ({ toggleMenu }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
            <MenuContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ y: 200 }}
            >
              <Logo />
              <ul>
                <Link to="/">
                  <li>Strategy</li>
                </Link>
                <Link to="/">
                  <li>Copy Writing</li>
                </Link>
                <Link to="/">
                  <li>Service Design</li>
                </Link>
                <Link to="/">
                  <li>Client Services</li>
                </Link>
              </ul>
            </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
