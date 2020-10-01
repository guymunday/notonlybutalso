import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Cookies = styled(motion.div)`
  width: 100%;
  position: fixed;
  bottom: 0;
  background: var(--copy);
  z-index: 9999;
  .cookies-inner {
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;

    div {
      padding: 10px 30px;
      p {
        color: var(--bg);
        font-size: 0.9rem;
        max-width: 700px;
      }
    }
    button {
      margin: 10px 30px 10px 0;
      padding: 5px;
      border-radius: 6px;
      outline: none;
      width: 120px;
      border: 2px solid var(--pink);
      background: var(--bg);
      font-weight: 600;
      color: var(--copy);
      text-align: center;
    }
  }
`;

const CookiesPopup = ({ setCookies }) => {
  return (
    <Cookies initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}>
      <div className="cookies-inner">
        <div>
          <p>
            We use cookies to ensure that we give you the best experience on our
            website. If you continue to use this site we will assume that you
            are happy with it.
          </p>
        </div>
        <button onClick={() => setCookies(true)}>
          Okay{" "}
          <span role="img" aria-label="thumbs up emoji">
            👍
          </span>
        </button>
      </div>
    </Cookies>
  );
};

export default CookiesPopup;
