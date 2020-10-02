import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql, Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";

const kebabCase = require("lodash.kebabcase");

const HomeHeroSection = styled(motion.section)`
  width: 100%;
  height: 70vh;
  background: var(--copy);
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  overflow: hidden;
  position: relative;
  .sticker {
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    box-shadow: var(--shadowinverse);
    overflow: hidden;
    cursor: all-scroll;
    ::active,
    :focus {
      cursor: all-scroll;
    }
    @media screen and (max-width: 650px) {
      width: 120px;
      height: 120px;
    }
    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .gatsby-image-wrapper {
      pointer-events: none;
      height: 100%;
      width: 100%;
    }
  }
`;

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.3 },
  show: { opacity: 1, scale: 1 },
};

const HomeHero = () => {
  const constraintsRef = useRef(null);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicCategory {
        edges {
          node {
            id
            data {
              name
              category_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
      allPrismicHeroSticker {
        edges {
          node {
            id
            data {
              internal_link {
                url
              }
              sticker_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <HomeHeroSection
      ref={constraintsRef}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {data.allPrismicCategory.edges.map(({ node }) => {
        // here we map over a random rotate
        function randomFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }
        const minY = 18;
        const maxY = 68;
        const minX = 18;
        const maxX = 68;

        const newY = randomFromTo(minY, maxY);
        const newX = randomFromTo(minX, maxX);

        return (
          <motion.div
            variants={item}
            key={node.id}
            className={`${kebabCase(node.data.name)} sticker`}
            whileTap={{ scale: 1.1 }}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 8 }}
            style={{
              top: `${newY}%`,
              left: `${newX}%`,
            }}
          >
            {node.data.category_image.localFile !== null && (
              <Img
                fluid={node.data.category_image.localFile.childImageSharp.fluid}
                alt="sticker"
              />
            )}
            {/* <Link to={`/${kebabCase(node.data.name)}`}>
              {node.data.name}
            </Link> */}
          </motion.div>
        );
      })}
      {data.allPrismicHeroSticker.edges.map(({ node }) => {
        // here we map over a random rotate
        function randomFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }
        const minY = 18;
        const maxY = 68;
        const minX = 18;
        const maxX = 68;

        const newY = randomFromTo(minY, maxY);
        const newX = randomFromTo(minX, maxX);

        return (
          <motion.div
            variants={item}
            key={node.id}
            className="sticker"
            whileTap={{
              scale: 1.1,
            }}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{
              bounceStiffness: 400,
              bounceDamping: 8,
            }}
            style={{
              top: `${newY}%`,
              left: `${newX}%`,
            }}
          >
            {node.data.sticker_image.localFile !== null && (
              <Img
                fluid={node.data.sticker_image.localFile.childImageSharp.fluid}
                alt="sticker"
              />
            )}
            {/* <Link to={`/discipline/${kebabCase(node.data.name)}`}>
              {node.data.name}
            </Link> */}
          </motion.div>
        );
      })}
    </HomeHeroSection>
  );
};

export default HomeHero;
