import React from "react";
import styled from "@emotion/styled";

const BlockQuote = styled.blockquote`
  margin: 60px 0;
  font-family: var(--text2);
  font-weight: 400;
  font-size: 3rem;
  p {
    font-family: var(--text2);
    font-weight: 400;
    font-size: 1.6rem;
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: 1.3rem;
    }
    :before {
      content: "“";
    }
    :after {
      content: "”";
    }
  }
`;

const Quote = ({ input }) => (
  <BlockQuote dangerouslySetInnerHTML={{ __html: input.primary.quote.html }} />
);

export default Quote;
