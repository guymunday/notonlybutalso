import React from "react";
import styled from "@emotion/styled";

export const SeperatorSpan = styled.span`
  display: block;
  width: 300px;
  height: 2px;
  background: var(--pink);
  margin: 70px auto;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const Seperator = ({ input }) => input.primary.seperator && <SeperatorSpan />;

export default Seperator;
