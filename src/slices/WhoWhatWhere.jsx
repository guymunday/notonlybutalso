import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  margin: 45px 0;
`;

const WhoWhatWhere = ({ input }) => (
  <>
    <Content dangerouslySetInnerHTML={{ __html: input.primary.who.html }} />
    <Content dangerouslySetInnerHTML={{ __html: input.primary.what.html }} />
    <Content dangerouslySetInnerHTML={{ __html: input.primary.based.html }} />
    <Content dangerouslySetInnerHTML={{ __html: input.primary.where.html }} />
    <Content
      dangerouslySetInnerHTML={{ __html: input.primary.introduction.html }}
    />
  </>
);

export default WhoWhatWhere;
