/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/core";
import "@reach/skip-nav/styles.css";

import Footer from "./Footer";
import SEO from "./SEO";
import SkipNavLink from "./SkipNavLink";
import reset from "../styles/reset";
import Header from "./Header";
import Menu from "./Menu";

import { motion, AnimatePresence } from "framer-motion";

const globalStyle = css`
  ${reset}
  * {
    transition: font-size 0.4s ease;
    background: transparent;
    padding: 0;
    margin: 0;
    font-family: "Inter";
    font-style: normal;
    font-kerning: none;
    font-size: 18px;
    line-height: 1.45;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    --bg: #f2f0eb;
    --copy: #17213b;
    --primary: #007bdf;
    --secondary: #ffa3b0;
    color: var(--copy);
    background-color: var(--bg);
    font-family: "Inter";
    font-style: normal;
    font-weight: 450;
    font-kerning: none;
    font-size: 18px;
    line-height: 1.45;
    position: relative;
  }

  body.dark {
    --bg: #17213b;
    --copy: #f2f0eb;
    --primary: #ffa3b0;
    --secondary: #007bdf;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    margin: 0;
    padding: 0;
    color: var(--copy);
  }

  h2 {
    font-family: "Shrikhand";
    font-weight: 400;
    font-size: 26px;
  }

  h3 {
    font-weight: 450;
  }

  a {
    text-decoration: none;
    font-weight: 450;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  a.nostyle {
    text-decoration: none;
  }
`;

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: duration },
  },
};

const Layout = ({ children, data, customSEO }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const html = document.querySelector("html");

  useEffect(() => {
    toggleMenu
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [toggleMenu]);

  return (
    <>
      <Global styles={globalStyle} />
      {/* <SkipNavLink /> */}
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {!customSEO && <SEO />}
      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;
