import React, { useEffect } from "react";
import { Link, graphql } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const AboutSectionContainer = styled(motion.section)`
  text-align: center;
  margin: 6rem auto 2rem auto;
`;

const Frame = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  .hide-show {
    padding: 0 20px;
    overflow: hidden;
    width: 100%;
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      max-width: 760px;
      margin: 0px auto 1.3rem auto;
      @media screen and (max-width: 980px) {
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 1.5rem;
      font-weight: 450;
      max-width: 760px;
      margin: 0px auto 2.5rem auto;
      @media screen and (max-width: 980px) {
        font-size: 1.2rem;
      }
    }
    a {
      span {
        font-size: inherit;
      }
    }
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <Frame>
        <motion.div className="hide-show">
          <h3>The creative industry is Not Only about graphic design</h3>
        </motion.div>
      </Frame>
      <Frame>
        <motion.div className="hide-show">
          <p>
            We're here to open the conversation by exploring the other roles
            that exist, who does them and how to get there
          </p>
          <Link to="/about">
            Find out more{" "}
            <span role="img" aria-label="pointing finger emoji">
              👉
            </span>
          </Link>
        </motion.div>
      </Frame>
    </AboutSectionContainer>
  );
};

export default AboutSection;
