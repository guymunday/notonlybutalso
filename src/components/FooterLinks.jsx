import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "./Logo";
import Email from "./Email";
import SvgSocial from "./SvgSocial";

const FooterLinksContainer = styled.nav`
  width: 100%;
  background: var(--bg);
  border-top: 2px solid var(--pink);
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLinks = () => {
  return (
    <>
      <FooterLinksContainer>
        <div className="social-icons">
          <SvgSocial size="22" color="var(--copy)" space={10} />
        </div>
        <Email />
      </FooterLinksContainer>
    </>
  );
};

export default FooterLinks;
