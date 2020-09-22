import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing } from "../components";
// import Img from "gatsby-image";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "../components/Homepage/AboutSection";
import HomeHero from "../components/Homepage/HomeHero";
import Contribute from "../components/Homepage/Contribute";
import HeroListing from "../components/Listing/HeroListing";

const Index = ({ data }) => {
  const [finishLoading, setFinishLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false);
      // sessionStorage.setItem("first_time", "1");
    }, 3000);
  }, []);

  // && !sessionStorage.getItem("first_time");

  return (
    <AnimatePresence>
      {finishLoading && typeof window !== "undefined" ? (
        <h1>hello</h1>
      ) : (
        <Layout>
          <HomeHero />
          <HeroListing posts={data.posts.nodes} />
          <AboutSection />
          <Listing posts={data.posts.nodes} />
          <Contribute />
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(
      limit: 20
      sort: { fields: [data___date], order: DESC }
    ) {
      nodes {
        uid
        data {
          hero_article
          title {
            text
          }
          author {
            text
          }
          hero_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
