import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "../../hooks/useEventListener";
import styled from "@emotion/styled";

const kebabCase = require("lodash.kebabcase");

const Item = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  height: 200px;
  background: var(--bg);
  border-radius: 20px;
  overflow: hidden;
  margin: 20px auto;
  border: 2px solid var(--pink);
  transition: 0.3s ease background;
  box-shadow: var(--shadow);
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const ItemInner = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 450;
  }
`;

const HeroImage = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  height: 200px;
  width: 200px;
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

const HeroImageInner = styled(motion.div)`
  width: 30%;
  overflow: hidden;
  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
  }
`;

const HeroListItem = ({ node, categories }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

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
      <AnimatePresence>
        {node.data.hero_image.localFile !== null && isHovered && (
          <HeroImage
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              top: `calc(${coords.y}px - 100px)`,
              left: `calc(${coords.x}px + 50px)`,
            }}
          >
            <Img
              fluid={node.data.hero_image.localFile.childImageSharp.fluid}
              alt={node.data.title.text}
            />
          </HeroImage>
        )}
      </AnimatePresence>
      <Item
        className={`${kebabCase(categories[0])}`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        onClick={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
          <HeroImageInner
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            {node.data.hero_image.localFile !== null && (
              <Img
                fluid={node.data.hero_image.localFile.childImageSharp.fluid}
                alt={node.data.title.text}
              />
            )}
          </HeroImageInner>
          <ItemInner>
            {categories && <Categories categories={categories} />}

            <h2>{node.data.title.text}</h2>
            <h3>
              Words by {node.data.author.text} — {node.data.date}
            </h3>
          </ItemInner>
        </Link>
      </Item>
    </>
  );
};

export default HeroListItem;
