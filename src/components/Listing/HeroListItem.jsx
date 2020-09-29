import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "../../hooks/useEventListener";
import styled from "@emotion/styled";

const kebabCase = require("lodash.kebabcase");

const HeroImage = styled(motion.div)`
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

const Item = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  height: 200px;
  background: var(--bg);
  border-radius: 20px;
  overflow: hidden;
  margin: 20px auto;
  border: 2px solid var(--pink);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const ItemInner = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    h2 {
      font-size: 1rem;
    }
  }
`;

const HeroImageInner = styled(motion.div)`
  width: 30%;
  overflow: hidden;
  a {
    .gatsby-image-wrapper {
      object-fit: cover;
      height: 100%;
    }
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
        {isHovered && (
          <HeroImage
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              top: `calc(${coords.y}px - 75px)`,
              left: `calc(${coords.x}px + 50px)`,
            }}
          >
            <Img
              fluid={
                node.data.categories[0].category.document[0].data.category_image
                  .localFile.childImageSharp.fluid
              }
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
        <HeroImageInner
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
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
          {categories && <Categories categories={categories} />}
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            <h3>
              Words by {node.data.author.text} — {node.data.date}
            </h3>
          </Link>
        </ItemInner>
      </Item>
    </>
  );
};

export default HeroListItem;
