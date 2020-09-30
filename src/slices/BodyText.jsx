import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  margin: 45px 0;
  p {
    margin: 30px 0;
    strong {
      color: var(--primary);
      font-weight: 600;
    }
  }
  ul {
    list-style-position: inside;
    li {
    }
  }
`;

const BodyText = ({ input }) => (
  <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
);

export default BodyText;
