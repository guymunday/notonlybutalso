/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { useState, useEffect } from "react";
import { Global, css } from "@emotion/core";

import Footer from "./Footer";
import SEO from "./SEO";
import reset from "../styles/reset";
import Header from "./Header";
import Menu from "./Menu";

import { motion, AnimatePresence } from "framer-motion";
import FooterLinks from "./FooterLinks";
import CookiesPopup from "./CookiesPopup";

const globalStyle = css`
  ${reset}
  * {
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
    overflow-x: hidden;
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
    --slider: #ffa3b0;
    --navy: #17213b;
    --slider-boarder: #17213b;
    --shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.009),
      0 2px 3.8px rgba(0, 0, 0, 0.017), 0 2.4px 5.1px rgba(0, 0, 0, 0.022),
      0 2.7px 6.1px rgba(0, 0, 0, 0.026), 0 2.9px 7px rgba(0, 0, 0, 0.028),
      0 3.1px 8.2px rgba(0, 0, 0, 0.029), 0 3.3px 10.3px rgba(0, 0, 0, 0.03),
      0 3.5px 14.4px rgba(0, 0, 0, 0.03), 0 3.8px 24.2px rgba(0, 0, 0, 0.033),
      0 4px 80px rgba(0, 0, 0, 0.04);
    --shadowinverse: 0 1.3px 2.2px rgba(0, 0, 0, 0.046),
      0 2px 3.8px rgba(0, 0, 0, 0.083), 0 2.4px 5.1px rgba(0, 0, 0, 0.112),
      0 2.7px 6.1px rgba(0, 0, 0, 0.131), 0 2.9px 7px rgba(0, 0, 0, 0.142),
      0 3.1px 8.2px rgba(0, 0, 0, 0.147), 0 3.3px 10.3px rgba(0, 0, 0, 0.148),
      0 3.5px 14.4px rgba(0, 0, 0, 0.152), 0 3.8px 24.2px rgba(0, 0, 0, 0.167);
    color: var(--copy);
    width: 100%;
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
    --navy: #17213b;
    --slider: #17213b;
    --slider-boarder: #ffa3b0;
    --shadow: 0 1.3px 2.2px rgba(0, 0, 0, 0.046),
      0 2px 3.8px rgba(0, 0, 0, 0.083), 0 2.4px 5.1px rgba(0, 0, 0, 0.112),
      0 2.7px 6.1px rgba(0, 0, 0, 0.131), 0 2.9px 7px rgba(0, 0, 0, 0.142),
      0 3.1px 8.2px rgba(0, 0, 0, 0.147), 0 3.3px 10.3px rgba(0, 0, 0, 0.148),
      0 3.5px 14.4px rgba(0, 0, 0, 0.152), 0 3.8px 24.2px rgba(0, 0, 0, 0.167);
    --shadowinverse: 0 1.3px 2.2px rgba(0, 0, 0, 0.009),
      0 2px 3.8px rgba(0, 0, 0, 0.017), 0 2.4px 5.1px rgba(0, 0, 0, 0.022),
      0 2.7px 6.1px rgba(0, 0, 0, 0.026), 0 2.9px 7px rgba(0, 0, 0, 0.028),
      0 3.1px 8.2px rgba(0, 0, 0, 0.029), 0 3.3px 10.3px rgba(0, 0, 0, 0.03),
      0 3.5px 14.4px rgba(0, 0, 0, 0.03), 0 3.8px 24.2px rgba(0, 0, 0, 0.033),
      0 4px 80px rgba(0, 0, 0, 0.04);
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
    strong {
      font-weight: 600;
    }
  }

  h1 {
    font-weight: 600;
  }

  h2 {
    font-family: "Shrikhand";
    font-weight: 400;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    transition: 0.2s ease;
    /* color: var(--primary); */
    &:hover,
    &:focus {
      color: var(--primary);
    }
  }

  a.nostyle {
    text-decoration: none;
  }

  h2 {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1rem;
  }
  p,
  strong,
  a,
  blockquote,
  li {
    font-size: 1rem;
  }

  @media screen and (min-width: 767.98px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 991.98px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  // Large devices (desktops, less than 1200px)
  @media screen and (min-width: 1199.98px) {
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    p,
    strong,
    a,
    blockquote,
    li,
    h4 {
      font-size: 1.1rem;
    }
  }
`;

const Layout = ({ children, data, customSEO }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cookies, setCookies] = useState(false);

  if (cookies) {
    localStorage.setItem("cookies", "1");
  }

  const html = typeof window !== "undefined" && document.querySelector("html");

  useEffect(() => {
    toggleMenu
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible");
  }, [toggleMenu]);

  return (
    <>
      <Global styles={globalStyle} />
      <div style={{ boxShadow: "var(--shadow)" }}>
        <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Menu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        {!customSEO && <SEO />}
        <AnimatePresence>
          {!cookies &&
            typeof window !== "undefined" &&
            !localStorage.getItem("cookies") && (
              <CookiesPopup cookies={cookies} setCookies={setCookies} />
            )}
        </AnimatePresence>
        <motion.main
          style={{ background: "var(--bg)" }}
          onClick={() => setCookies(true)}
        >
          {children}
          <FooterLinks />
        </motion.main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
