import React from "react";
import { Link } from "gatsby";
// import styled from "@emotion/styled";
// import { motion } from "framer-motion";
import { AboutSectionContainer } from "./AboutSection";

const Contribute = () => {
  return (
    <AboutSectionContainer>
      <div>
        <h2>Want to contribute? We'd love you too!</h2>
        <p>We'd love to...</p>
        <Link to="/contribute">
          Find out more{" "}
          <span role="img" aria-label="Pointing figer emjoi">
            👉
          </span>
        </Link>
      </div>
    </AboutSectionContainer>
  );
};

export default Contribute;
