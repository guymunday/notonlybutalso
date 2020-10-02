import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "./Logo";
import Email from "./Email";
import SvgSocial from "./SvgSocial";
import GetFeatured from "./GetFeatured";

const FooterLinksContainer = styled.nav`
  width: 100%;
  background: var(--bg);
  border-top: 2px solid var(--pink);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    .button1 {
      margin-right: 15px;
      @media screen and (max-width: 500px) {
        margin-right: 0px;
        margin-bottom: 15px;
      }
    }
  }
`;

const FooterLinks = () => {
  return (
    <>
      <FooterLinksContainer>
        <div className="social-icons">
          <SvgSocial size="22" color="var(--copy)" space={10} />
        </div>
        <div className="buttons">
          <div className="button1">
            <GetFeatured />
          </div>
          <div className="button2">
            <Email />
          </div>
        </div>
      </FooterLinksContainer>
    </>
  );
};

export default FooterLinks;
