import React, { useRef } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Img from "gatsby-image";

const HomeHeroSection = styled(motion.section)`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  position: relative;
  .sticker {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: var(--shadow);
    overflow: hidden;
    user-select: none;
    cursor: all-scroll;
    ::active,
    :focus {
      cursor: all-scroll;
    }
    @media screen and (max-width: 375px) {
      width: 170px;
      height: 170px;
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

const HeadshotArticle = ({ input }) => {
  const constraintsRef = useRef(null);
  return (
    <HomeHeroSection
      ref={constraintsRef}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {input.items.map((node, i) => {
        console.log(node);

        // here we map over a random rotate
        function randomFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }

        const rotateMin = -30;
        const rotateMax = 30;

        const newRotate = randomFromTo(rotateMin, rotateMax);

        const minY = 18;
        const maxY = 48;
        const minX = 18;
        const maxX = 68;

        const newY = randomFromTo(minY, maxY);
        const newX = randomFromTo(minX, maxX);

        return (
          <motion.div
            variants={item}
            key={i}
            className={`sticker`}
            whileTap={{ scale: 1.1 }}
            drag
            dragConstraints={constraintsRef}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 8 }}
            style={{
              top: `${newY}%`,
              left: `${newX}%`,
            }}
          >
            {node.headshot.localFile.childImageSharp !== null && (
              <Img
                fluid={node.headshot.localFile.childImageSharp.fluid}
                alt="sticker"
                style={{
                  transform: `rotate(${newRotate}deg)`,
                }}
              />
            )}
          </motion.div>
        );
      })}
    </HomeHeroSection>
  );
};

export default HeadshotArticle;
