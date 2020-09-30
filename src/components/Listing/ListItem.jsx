import React, { useState, useCallback } from "react";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";
import useEventListener from "../../hooks/useEventListener";
import {
  Item,
  ItemInner,
  HeroImage,
  HeroImageInner,
} from "../../styles/listingStyles";

const kebabCase = require("lodash.kebabcase");

const ListItem = ({ node, categories }) => {
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
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            {/* <h3>{node.data.title_two.text}</h3> */}
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

export default ListItem;
