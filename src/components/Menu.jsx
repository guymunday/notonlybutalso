import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import Logo from "./Logo";
import Email from "./Email";
import SvgSocial from "./SvgSocial";
import GetFeatured from "./GetFeatured";

const MenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: var(--bg);
  border: 3px solid var(--pink);
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
      .menu-reveal {
        max-width: 405px;
        margin-bottom: 20px;
        p {
          margin: 20px 0;
        }
      }
    }
    .follow {
      margin-top: 50px;
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
                  <Link to="/">
                    <motion.span
                      whileHover={{ x: 0 }}
                      initial={{ x: -40 }}
                      animate={{ x: -40 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span role="img" aria-label="Pointing figer emjoi">
                        👉
                      </span>{" "}
                      Home
                    </motion.span>
                  </Link>
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
                      About
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
                        className="menu-reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p>
                          We're always looking for people to contribute. If you
                          want be featured, fill out the form below.
                        </p>
                        <GetFeatured />
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
                        className="menu-reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <p>
                          If you want to share some words of wisdom, work with
                          us or just have a question then shoot us an email at:
                        </p>
                        <Email />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="follow">
                    <SvgSocial color="var(--copy)" size="25" space={10} />
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
