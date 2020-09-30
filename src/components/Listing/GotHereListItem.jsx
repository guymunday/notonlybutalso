import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "../../hooks/useEventListener";
import styled from "@emotion/styled";

const kebabCase = require("lodash.kebabcase");

const Item = styled(motion.div)`
  width: 375px;
  height: 475px;
  margin: 50px;
  flex-grow: 1;
  background: var(--bg);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 2px solid var(--pink);
  box-shadow: var(--shadow);
  @media screen and (max-width: 650px) {
    margin: 50px 20px;
    width: 300px;
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
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [colourChange, setColourChange] = useState(false);

  const imageHandler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", imageHandler);
  return (
    <>
      <Item
        className={`${kebabCase(categories[0])}`}
        onMouseEnter={() => {
          setIsHovered(true), setColourChange(!colourChange);
        }}
        onMouseLeave={() => {
          setIsHovered(false), setColourChange(!colourChange);
        }}
        onClick={() => setIsHovered(false)}
        whileTap={{ scale: 0.98 }}
        whileHover={{
          scale: 1.03,
        }}
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
            {/* <h3>
                Words by {node.data.author.text} — {node.data.date}
              </h3> */}
          </Link>
          {categories && <Categories categories={categories} />}
        </ItemInner>
      </Item>
    </>
  );
};

export default GotHereListItem;
