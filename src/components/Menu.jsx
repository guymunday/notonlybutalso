import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import Logo from "./Logo";
import Email from "./Email";
import SvgInstagram from "./SvgInstagram";
import SvgLinkedin from "./SvgLinkedin";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: var(--bg);
  z-index: 998;
  .menu-inner {
    width: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .links {
      margin: 40px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      overflow-x: hidden;
      a,
      .contribute {
        span {
          display: inline-block;
          font-size: 1.8rem;
          font-weight: 600;
          transition: ease 0.2s color;
          cursor: pointer;
          :hover {
            color: var(--primary);
          }
        }
      }
    }
    .follow {
      margin-top: 50px;
      .instagram {
        margin-right: 20px;
      }
    }
  }
`;

const Menu = ({ toggleMenu, setToggleMenu }) => {
  const [showContribute, setShowContribute] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <>
            <MenuContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Logo />
              <div className="menu-inner">
                <nav className="links">
                  <Link to="/about">
                    <motion.span
                      whileHover={{ x: 0 }}
                      initial={{ x: -40 }}
                      animate={{ x: -40 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span role="img" aria-label="Pointing figer emjoi">
                        👉
                      </span>{" "}
                      About us
                    </motion.span>
                  </Link>
                  <div
                    className="contribute"
                    onClick={() => setShowContribute(!showContribute)}
                  >
                    <motion.span
                      whileHover={{ x: 0 }}
                      initial={{ x: -40 }}
                      animate={{ x: -40 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span role="img" aria-label="Pointing figer emjoi">
                        👉
                      </span>{" "}
                      Get featured
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {showContribute && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p>If you would like to contribute...</p>
                        <Email />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className="contribute"
                    onClick={() => setShowContact(!showContact)}
                  >
                    <motion.span
                      whileHover={{ x: 0 }}
                      initial={{ x: -40 }}
                      animate={{ x: -40 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span role="img" aria-label="Pointing figer emjoi">
                        👉
                      </span>{" "}
                      Contact us
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {showContact && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p>If you would like to contribute...</p>
                        <Email />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="follow">
                    <SvgInstagram color="var(--copy)" size="25" />
                    <SvgLinkedin color="var(--copy)" size="25" />
                  </div>
                </nav>
              </div>
            </MenuContainer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Menu;
