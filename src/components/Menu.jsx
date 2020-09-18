import React, { useLayoutEffect } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 52px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: var(--bg);
  z-index: 999;
  @media screen and (max-width: 650px) {
    top: 34px;
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
