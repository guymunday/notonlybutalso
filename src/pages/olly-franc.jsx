import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { Layout, PostWrapper } from "../components";
import Img from "gatsby-image";
import { Hero } from "../templates/post";
import ExploreListing from "../components/Listing/ExploreListing";
import ollyFrancImage from "../assets/ollyFranc.jpg";

const OllyFranc = ({ data: { posts, photo } }) => {
  console.log(photo, "hello");

  return (
    <Layout>
      <PostWrapper>
        <Hero>
          <h1>Olly{"&"}Franc ✕ Not Only — But Also</h1>
          <img
            src={ollyFrancImage}
            alt="Olly&Franc at work"
            loading="lazy"
            style={{ width: "100%" }}
          />
          <h2>
            We’re partnering with creative duo Olly&Franc on a series to
            celebrate collaboration between design and different disciplines.
          </h2>
        </Hero>
      </PostWrapper>
      <ExploreListing posts={posts.nodes} />
    </Layout>
  );
};

export default OllyFranc;

export const pageQuery = graphql`
  query Olly {
    posts: allPrismicPost(
      limit: 3
      sort: { fields: [data___date], order: DESC }
    ) {
      nodes {
        uid
        data {
          title {
            text
          }
          title_two {
            text
          }
          author {
            text
          }
          hero_image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
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
      }
    }
  }
`;
