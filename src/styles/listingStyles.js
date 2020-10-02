import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroImage = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  overflow: hidden;
  background: var(--primary);
  box-shadow: var(--shadow);
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

export const Item = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  height: 200px;
  background: var(--bg);
  border-radius: 20px;
  overflow: hidden !important;
  margin: 20px auto;
  border: 2px solid var(--pink);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media screen and (max-width: 580px) {
    height: auto;
    flex-direction: column;
  }
`;

export const ItemInner = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 55%;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    font-size: 0.8rem;
    h2 {
      font-size: 1.3rem;
      @media screen and (max-width: 980px) {
        font-size: 1.15rem;
      }
    }
    h3 {
      font-size: 1.12rem;
      font-weight: 450;
      margin-top: 5px;
      @media screen and (max-width: 980px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 580px) {
        margin-bottom: 80px;
      }
    }
  }
`;

export const HeroImageInner = styled(motion.div)`
  width: 30%;
  overflow: hidden;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 180px;
  }
  a {
    .gatsby-image-wrapper {
      overflow: hidden;
      object-fit: cover;
      height: 100%;
    }
  }
`;
