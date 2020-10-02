import React from "react";
import styled from "@emotion/styled";

export const BodyContent = styled.div`
  margin: 45px 0;
  h3 {
    font-weight: 450;
    margin-bottom: -20px;
    strong {
      font-size: inherit;
      font-weight: 600;
    }
  }
  p {
    margin: 40px 0;
    strong {
      color: var(--primary);
      font-weight: 600;
    }
    em {
      font-style: oblique;
    }
  }
  ul {
    list-style-position: outside;
    list-style: none;
    margin-left: 2rem;
    li {
      :before {
        content: "💡";
        margin-right: 15px;
        margin-left: -2rem;
      }
    }
  }
`;

const BodyText = ({ input }) => (
  <BodyContent dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />
);

export default BodyText;
