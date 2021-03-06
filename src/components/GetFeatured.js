import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const EmailContainer = styled.div`
  position: relative;
  display: inline-block;
  .get-featured {
    padding: 5px;
    border-radius: 6px;
    /* box-shadow: var(--shadow); */
    outline: none;
    border: 2px solid var(--secondary);
    background: var(--bg);
    font-weight: 600;
    color: var(--copy);
    text-align: center;
    a {
      font-size: 1rem;
    }
  }
`;

const GetFeatured = () => {
  return (
    <EmailContainer>
      <motion.div className="get-featured" whileTap={{ scale: 0.95 }}>
        <a href="https://forms.gle/mxRBTg1hLoWVUgnf8" target="_blank">
          Get Featured
        </a>
      </motion.div>
    </EmailContainer>
  );
};

export default GetFeatured;
