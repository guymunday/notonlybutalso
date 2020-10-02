import React from "react";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const kebabCase = require("lodash.kebabcase");

const Item = styled(motion.div)`
  width: 375px;
  height: 475px;
  margin: 50px;
  flex-grow: 1;
  background: var(--bg);
  border-radius: 15px;
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 2px solid var(--secondary);
  box-shadow: var(--shadow);
  transform-style: preserve-3d;
  will-change: transform;
  @media screen and (max-width: 650px) {
    margin: 50px 20px;
    width: 290px;
  }
  a {
    text-decoration: none;
  }
`;

const ItemInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 60%;
  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 0.8rem;
    h2 {
      font-size: 1.3rem;
      @media screen and (max-width: 980px) {
        font-size: 1.1rem;
      }
    }
    h3 {
      font-size: 1.12rem;
      font-weight: 450;
      margin-top: 5px;
      @media screen and (max-width: 980px) {
        font-size: 0.9rem;
      }
    }
  }
`;

const HeroImageInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 40%;
  overflow: hidden;
  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
  }
`;

const GotHereListItem = ({ node, categories }) => {
  return (
    <>
      <Item
        style={{ overflow: "hidden" }}
        className={`${kebabCase(categories[0])}`}
        whileTap={{ scale: 0.98 }}
        whileHover={{
          scale: 1.03,
        }}
        initial={{ scale: 1 }}
      >
        <HeroImageInner>
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            {node.data.hero_image.localFile !== null && (
              <Img
                fluid={node.data.hero_image.localFile.childImageSharp.fluid}
                alt={node.data.title.text}
              />
            )}
          </Link>
        </HeroImageInner>
        <ItemInner>
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            <h3>{node.data.title_two.text}</h3>
          </Link>
          {categories && <Categories categories={categories} />}
        </ItemInner>
      </Item>
    </>
  );
};

export default GotHereListItem;
