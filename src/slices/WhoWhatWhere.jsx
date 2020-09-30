import React from "react";
import styled from "@emotion/styled";

const IntroductionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--pink);
  border-radius: 12px;
  background: var(--bg);
  box-shadow: var(--shadow);
  padding: 20px;
  .who {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--primary);
    margin-top: 10px;
    :first-child {
      margin-top: 0;
    }
  }
`;

const Content = styled.div``;

const WhoWhatWhere = ({ input }) => (
  <IntroductionContainer>
    <p className="who">Who are you?</p>
    <Content dangerouslySetInnerHTML={{ __html: input.primary.who.html }} />
    <p className="who">What do you do?</p>
    <Content dangerouslySetInnerHTML={{ __html: input.primary.what.html }} />
    <p className="who">Where are you based?</p>
    <Content dangerouslySetInnerHTML={{ __html: input.primary.based.html }} />
    <p className="who">Where can we find your work?</p>
    <Content dangerouslySetInnerHTML={{ __html: input.primary.where.html }} />
  </IntroductionContainer>
);

export default WhoWhatWhere;
