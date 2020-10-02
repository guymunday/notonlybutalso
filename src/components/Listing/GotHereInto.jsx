import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const kebabCase = require("lodash.kebabcase");

const ItemOuter = styled.div`
  width: 375px;
  height: 475px;
  display: flex;
  align-items: center;
  margin: 50px;
  @media screen and (max-width: 650px) {
    margin: 50px 20px;
    width: 260px;
  }
`;

const Item = styled.div`
  width: 100%;
  flex-grow: 1;
  background: var(--bg);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 2px solid var(--slider-boarder);
  box-shadow: var(--shadow);
  .emoji-arrows {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 2rem;
      padding: 20px 20px 0 20px;
    }
    .swipe {
      font-size: 0.9rem;
      @media screen and (min-width: 650px) {
        display: none;
      }
    }
  }
`;

const ItemInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h2 {
    font-size: 1.3rem;
    @media screen and (max-width: 980px) {
      font-size: 1.1rem;
    }
  }
  h3 {
    font-size: 1.12rem;
    font-weight: 450;
    margin-top: 5px;
    @media screen and (max-width: 980px) {
      font-size: 0.9rem;
    }
  }
`;

const GotHereIntro = () => {
  return (
    <ItemOuter>
      <Item>
        <ItemInner>
          <h2>How I got here</h2>
          <h3>
            There’s no right way to get into a role in the creative industry. We
            catch up with some industry insiders to find out how they got into
            their role and what they actually do.
          </h3>
        </ItemInner>
        <div className="emoji-arrows">
          <span role="img" aria-label="pointing emoji left">
            👈
          </span>
          <span class="swipe">Swipe</span>
          <span role="img" aria-label="pointing emoji right">
            👉
          </span>
        </div>
      </Item>
    </ItemOuter>
  );
};

export default GotHereIntro;
