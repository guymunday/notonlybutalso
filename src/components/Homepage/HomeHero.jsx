import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useStaticQuery, graphql, Link } from "gatsby";
import { motion } from "framer-motion";
import Img from "gatsby-image";

const kebabCase = require("lodash.kebabcase");

const HomeHeroSection = styled.section`
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
    img {
      pointer-events: none;
    }
  }
`;

const HomeHero = () => {
  const constraintsRef = useRef(null);

  const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicCategory(sort: { fields: first_publication_date }) {
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
    }
  `);

  return (
    <HomeHeroSection ref={constraintsRef}>
      {data.allPrismicCategory.edges.map(({ node }) => {
        // here we map over a random rotate
        function randomFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }
        const minY = 30;
        const maxY = 60;
        const minX = 30;
        const maxX = 60;

        const newY = randomFromTo(minY, maxY);
        const newX = randomFromTo(minX, maxX);

        return (
          <motion.div
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
                alt="hello"
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
