import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import SvgLogo from "../SvgLogo";

export const AboutSectionContainer = styled.section`
  text-align: center;
  padding: 50px 0 0 0;
  div {
    padding: 0 20px;
    h2 {
      font-family: var(--text1);
      font-weight: 600;
      font-size: 1rem;
    }
    p {
      font-size: 1.3rem;
      font-weight: 450;
      max-width: 820px;
      margin: 35px auto 45px auto;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <div>
        <SvgLogo size="100" color="var(--header)" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/about">
          Find out more
          {/* <span role="img" aria-label="Pointing figer emjoi">
            👉
          </span> */}
        </Link>
      </div>
    </AboutSectionContainer>
  );
};

export default AboutSection;
