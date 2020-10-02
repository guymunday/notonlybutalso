import React from "react";
import styled from "@emotion/styled";
import SvgLogo from "./SvgLogo";
import { Link } from "gatsby";

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 150px;
  display: flex;
  z-index: -1;
  .footer-padding {
    width: 100%;
    height: 100%;
    .footer-inner {
      background: var(--secondary);
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      p {
        font-size: 0.7rem;
        font-weight: 600;
        color: var(--offwhite);
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-padding">
        <div className="footer-inner">
          <SvgLogo color="var(--offwhite)" size="100" />
          <p>© Not Only — But Also 2020</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
