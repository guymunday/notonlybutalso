import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
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
      <AnimatePresence>
        {node.data.hero_image.localFile !== null && isHovered && (
          <HeroImage
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              top: `calc(${coords.y}px / 2)`,
              left: `calc(${coords.x}px + 100px)`,
            }}
          >
            <Img
              fluid={node.data.hero_image.localFile.childImageSharp.fluid}
              alt={node.data.title.text}
            />
            )}
          </HeroImage>
        )}
      </AnimatePresence>
      <Item
        className={`${kebabCase(categories[0])}`}
        onMouseEnter={() => {
          setIsHovered(!isHovered), setColourChange(!colourChange);
        }}
        onMouseLeave={() => {
          setIsHovered(!isHovered), setColourChange(!colourChange);
        }}
        onClick={() => setIsHovered(!isHovered)}
        style={{ background: colourChange && "var(--primary)" }}
      >
        <ItemInner>
          <h1>{categories && <Categories categories={categories} />}</h1>
          <Link to={`/${kebabCase(categories[0])}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            <h3>
              Words by {node.data.author.text} — {node.data.date}
            </h3>
          </Link>
        </ItemInner>
        <AnimatePresence>
          {!isHovered && (
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
          )}
        </AnimatePresence>
      </Item>
    </>
  );
};

export default ListItem;
