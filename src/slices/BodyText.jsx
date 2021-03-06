import React from "react";
import styled from "@emotion/styled";

export const BodyContent = styled.div`
  margin: 45px 0;
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-weight: 450;
    margin-bottom: -20px;
    strong {
      font-size: inherit;
      font-weight: 600;
    }
  }
  h4 {
    font-weight: 600;
    color: var(--primary);
    margin-bottom: -20px;
    font-size: 1.1.rem;
  }
  p {
    margin: 40px 0;
    strong {
      /* color: var(--primary); */
      font-weight: 600;
      font-size: inherit;
    }
    em {
      font-style: oblique;
      font-size: inherit;
    }
  }
  ul {
    list-style-position: outside;
    list-style: none;
    margin-left: 2rem;
    margin: 40px 0 40px 2rem;
    li {
      :before {
        content: "💡";
        margin-right: 15px;
        margin-left: -2rem;
      }
    }
  }
  ol {
    list-style-position: outside;
    margin-left: 2rem;
    margin: 40px 0 40px 2rem;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

const BodyText = ({ input }) => (
  <BodyContent dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
);

export default BodyText;
