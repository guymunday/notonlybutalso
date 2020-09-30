import React from "react";
import { Link } from "gatsby";
// import styled from "@emotion/styled";
// import { motion } from "framer-motion";
import { AboutSectionContainer } from "./AboutSection";
import Email from "../Email";

const Contribute = () => {
  return (
    <AboutSectionContainer>
      <div>
        <h2>Want to contribute? We'd love you too!</h2>
        <p>We'd love to...</p>
        <Email />
      </div>
    </AboutSectionContainer>
  );
};

export default Contribute;
