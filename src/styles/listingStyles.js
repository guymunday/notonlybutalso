import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Item = styled.div`
  width: 100%;
  height: 300px;
  background: var(--bg);
  border: 1px solid var(--copy);
  box-shadow: 3px 3px 0px var(--copy);
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  transition: 0.3s ease background;
`;

export const ItemInner = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  a {
    text-decoration: none;
    h2 {
      font-size: 2rem;
      padding: 20px 0;
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 450;
    }
  }
  h1 {
    a {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
`;

export const HeroImage = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  height: 300px;
  width: 300px;
  overflow: hidden;
  background: var(--primary);
  box-shadow: 1px 1px 5px #000000;
  z-index: 997;
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .gatsby-image-wrapper {
    object-fit: cover;
  }
`;

export const HeroImageInner = styled(motion.div)`
  position: relative;
  width: 30%;
  height: 100%;
  overflow: hidden;
  .gatsby-image-wrapper {
    object-fit: cover;
  }
`;
