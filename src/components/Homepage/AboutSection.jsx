import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSectionContainer = styled.section`
  text-align: center;
  margin: 6rem auto 2rem auto;
`;

const Frame = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  .hide-show {
    padding: 0 20px;
    overflow: hidden;
    width: 100%;
    h2 {
      font-family: var(--text1);
      font-weight: 600;
      font-size: 1rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 450;
      max-width: 760px;
      margin: 0px auto 1.3rem auto;
      @media screen and (max-width: 980px) {
        font-size: 1.2rem;
      }
      span {
        font-size: inherit;
        font-weight: 600;
      }
    }
    a {
      margin-top: 1rem;
    }
  }
`;

const AboutSection = () => {
  const animation = useAnimation();
  const [about, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  const animation2 = useAnimation();
  const [about2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: "-150px",
  });

  useEffect(() => {
    if (inView2) {
      animation2.start("visible");
    }
  }, [animation2, inView2]);

  return (
    <AboutSectionContainer>
      <Frame>
        <motion.div
          className="hide-show"
          ref={about}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            },
            hidden: { y: "100%" },
          }}
        >
          <p>
            The creative industry is <span>Not Only</span> about graphic design.
          </p>
        </motion.div>
      </Frame>
      <Frame>
        <motion.div
          className="hide-show"
          ref={about2}
          animate={animation2}
          initial="hidden"
          variants={{
            visible: {
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9],
              },
            },
            hidden: { y: "100%" },
          }}
        >
          <p>
            We're here to open the conversation by exploring the other roles
            that exist, who does them and how to get there.
          </p>
          <Link to="/about">
            About Not Only — But Also
            {/* <span role="img" aria-label="Pointing figer emjoi">
            👉
          </span> */}
          </Link>
        </motion.div>
      </Frame>
    </AboutSectionContainer>
  );
};

export default AboutSection;
