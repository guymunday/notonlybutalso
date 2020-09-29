import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  width: 100%;
  height: 300px;
  background: var(--bg);
  border-radius: 20px;
  overflow: hidden;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  transition: 0.3s ease background;
  h1 {
    a {
      color: var(--secondary);
      font-size: 1.6rem;
      font-weight: 600;
      text-decoration: underline;
      text-decoration-color: var(--secondary);
      transition: background 0.2s ease;
      :hover {
        background: yellow;
      }
    }
  }
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
  overflow: hidden;
  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
  }
`;
