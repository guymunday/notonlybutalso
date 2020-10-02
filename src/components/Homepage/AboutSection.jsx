import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSectionContainer = styled(motion.section)`
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
    p {
      font-size: 1.5rem;
      font-weight: 450;
      max-width: 760px;
      margin: 0px auto 1.3rem auto;
      @media screen and (max-width: 980px) {
        font-size: 1.2rem;
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

  return (
    <AboutSectionContainer
      ref={about}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: { y: "100%", opacity: 0 },
      }}
    >
      <Frame>
        <motion.div className="hide-show">
          <p>
            The creative industry is Not Only about graphic design.
          </p>
        </motion.div>
      </Frame>
      <Frame>
        <motion.div className="hide-show">
          <p>
            We're here to open the conversation by exploring the other roles
            that exist, who does them and how to get there.
          </p>
          <Link to="/about">
            About Not Only — But Also{" "}
            <span role="img" aria-label="pointing finger emoji">
              👉
            </span>
          </Link>
        </motion.div>
      </Frame>
    </AboutSectionContainer>
  );
};

export default AboutSection;
