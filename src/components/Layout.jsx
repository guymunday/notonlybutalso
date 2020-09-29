/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/core";
import "@reach/skip-nav/styles.css";

import Footer from "./Footer";
import SEO from "./SEO";
import reset from "../styles/reset";
import Header from "./Header";
import Menu from "./Menu";

import { motion, AnimatePresence } from "framer-motion";
import Contribute from "./Homepage/Contribute";

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
    --header: #007bdf;
    --offwhite: #f2f0eb;
    --text1: "Inter", Helvetica, sans-serif;
    --text2: "Shrikhand", serif;
    --pink: #ffa3b0;
    --shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.009),
      0 2px 3.8px rgba(0, 0, 0, 0.017), 0 2.4px 5.1px rgba(0, 0, 0, 0.022),
      0 2.7px 6.1px rgba(0, 0, 0, 0.026), 0 2.9px 7px rgba(0, 0, 0, 0.028),
      0 3.1px 8.2px rgba(0, 0, 0, 0.029), 0 3.3px 10.3px rgba(0, 0, 0, 0.03),
      0 3.5px 14.4px rgba(0, 0, 0, 0.03), 0 3.8px 24.2px rgba(0, 0, 0, 0.033),
      0 4px 80px rgba(0, 0, 0, 0.04);
    color: var(--copy);
    background-color: var(--bg);
    font-family: "Inter", Helvetica, sans-serif;
    font-style: normal;
    font-weight: 450;
    font-kerning: none;
    font-size: 18px;
    line-height: 1.45;
    position: relative;
    overflow-x: hidden;
  }

  body.dark {
    --bg: #17213b;
    --copy: #f2f0eb;
    --offwhite: #f2f0eb;
    --primary: #ffa3b0;
    --secondary: #007bdf;
    --header: #f2f0eb;
    --text1: "Inter", Helvetica, sans-serif;
    --text2: "Shrikhand", serif;
    --pink: #ffa3b0;
    --shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.046),
      0 2px 3.8px rgba(0, 0, 0, 0.083), 0 2.4px 5.1px rgba(0, 0, 0, 0.112),
      0 2.7px 6.1px rgba(0, 0, 0, 0.131), 0 2.9px 7px rgba(0, 0, 0, 0.142),
      0 3.1px 8.2px rgba(0, 0, 0, 0.147), 0 3.3px 10.3px rgba(0, 0, 0, 0.148),
      0 3.5px 14.4px rgba(0, 0, 0, 0.152), 0 3.8px 24.2px rgba(0, 0, 0, 0.167),
      0 4px 80px rgba(0, 0, 0, 0.2);
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
  }

  h3 {
  }

  a {
    text-decoration: underline;
    font-weight: 450;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  a.nostyle {
    text-decoration: none;
  }

  @media (min-width: 575.98px) {
    h2 {
      font-size: 1.2rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    p,
    strong,
    a,
    blockquote {
      font-size: 1rem;
    }
  }

  @media (min-width: 767.98px) {
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 991.98px) {
    h2 {
      font-size: 1.3rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.3rem;
    }
    p,
    strong,
    a,
    blockquote {
      font-size: 1.1rem;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media (min-width: 1199.98px) {
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    h4 {
      font-size: 1.4rem;
    }
  }
`;

const duration = 0.5;

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
    transition: { duration: 13, delay: duration },
  },
};

const Layout = ({ children, data, customSEO }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const html = typeof window !== "undefined" && document.querySelector("html");

  useEffect(() => {
    toggleMenu
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [toggleMenu]);

  return (
    <>
      <Global styles={globalStyle} />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      {!customSEO && <SEO />}
      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          style={{ background: "var(--bg)", boxShadow: "var(--shadow)" }}
        >
          {children}
          <Contribute />
        </motion.main>
        <Footer />
      </AnimatePresence>
    </>
  );
};

export default Layout;
