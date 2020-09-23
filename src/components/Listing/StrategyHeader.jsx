import React, { Component } from "react";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";

const IntroHero = styled.div`
  width: 100%;
  padding: 50px;
`

const StrategyHeader = () => {
  return (
    <IntroHero>
      <p>
        Strategy is an integral part of the creative process, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </IntroHero>
  );
};

export default StrategyHeader;
