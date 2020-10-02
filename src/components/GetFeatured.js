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
    border: 2px solid var(--pink);
    background: var(--bg);
    font-weight: 600;
    color: var(--copy);
    text-align: center;
    font-size: 18px;
  }
`;

const GetFeatured = () => {
  return (
    <EmailContainer>
      <motion.div className="get-featured" whileTap={{ scale: 0.95 }}>
        <a href="/" target="_blank">
          Get Featured
        </a>
      </motion.div>
    </EmailContainer>
  );
};

export default GetFeatured;
