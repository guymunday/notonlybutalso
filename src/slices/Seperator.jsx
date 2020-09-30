import React from "react";
import styled from "@emotion/styled";

const SeperatorSpan = styled.span`
  display: block;
  width: 300px;
  height: 2px;
  background: var(--pink);
  margin: 70px auto;
`;

const Seperator = ({ input }) => input.primary.seperator && <SeperatorSpan />;

export default Seperator;
