import React, { useState, useEffect, useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "../../hooks/useEventListener";

const kebabCase = require("lodash.kebabcase");

const Item = styled.div`
  width: 100%;
  border-top: 1px solid var(--copy);
  border-bottom: 1px solid var(--copy);
  margin: 10px 0;
  display: flex;
`;

const ItemInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  a {
    text-decoration: none;
    h2 {
      font-size: 2rem;
      padding: 30px 0;
    }
  }
`;

const HeroImage = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  height: 300px;
  width: 300px;
  overflow: hidden;
  box-shadow: 1px 1px 5px #000000;
  .gatsby-image-wrapper {
    object-fit: cover;
  }
`;

const HeroListItem = ({ node, categories }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", handler);

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
              top: `calc(${coords.y}px / 2)`,
              left: `calc(${coords.x}px)`,
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
        onMouseEnter={() => setIsHovered(!isHovered)}
        onMouseLeave={() => setIsHovered(!isHovered)}
      >
        <ItemInner>
          <h1>{categories && <Categories categories={categories} />}</h1>
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            <h3>Words by {node.data.author.text}</h3>
          </Link>
        </ItemInner>
      </Item>
    </>
  );
};

export default HeroListItem;
