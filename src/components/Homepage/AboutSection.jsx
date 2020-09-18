import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AboutSectionContainer = styled.section`
  text-align: center;
  border-top: 1px solid var(--copy);
  border-bottom: 1px solid var(--copy);
  div {
    h2 {
      font-size: 18px;
      font-weight: 600;
      font-family: "Inter", sans-serif;
    }
    p {
      max-width: 600px;
      margin: 50px auto;
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <div>
        <h2>Not Only — But Also</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/about">
          Find out more{" "}
          <span role="img" aria-label="Pointing figer emjoi">
            👉
          </span>
        </Link>
      </div>
    </AboutSectionContainer>
  );
};

export default AboutSection;
