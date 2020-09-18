import React, { Component } from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: 500px;
  display: flex;
  .footer-padding {
    width: 100%;
    height: 100%;
    padding: 30px;
    .footer-inner {
      border: 1px solid var(--copy);
      width: 100%;
      height: 100%;
      display: flex;
      align-items:center;
      justify-content:space-around;
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <div className="footer-padding">
          <div className="footer-inner">
            <h2>Footer</h2>
          </div>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
