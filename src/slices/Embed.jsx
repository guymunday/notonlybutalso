import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  margin: 45px 0;
  width: 100%;
  position: relative;
  padding-top: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const Embed = ({ input }) => (
  <Content dangerouslySetInnerHTML={{ __html: input.primary.video.html }} />
);

export default Embed;
