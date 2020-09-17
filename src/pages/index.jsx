import React, { useState, useEffect } from "react";
// import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing, Wrapper, Title } from "../components";
// import Img from "gatsby-image";
import { motion, AnimatePresence } from "framer-motion";

const Index = ({ data }) => {
  const [finishLoading, setFinishLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false);
      sessionStorage.setItem("first_time", "1");
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      {finishLoading &&
      typeof window !== "undefined" &&
      !sessionStorage.getItem("first_time") ? (
        <h1>hello</h1>
      ) : (
        <Layout>
          <Listing posts={data.posts.nodes} />
        </Layout>
      )}
    </AnimatePresence>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        homepage_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        content {
          html
        }
      }
    }
    posts: allPrismicPost(
      limit: 20
      sort: { fields: [data___date], order: DESC }
    ) {
      nodes {
        uid
        data {
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
