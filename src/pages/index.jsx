import React from "react";
// import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing } from "../components";
// import Img from "gatsby-image";
import AboutSection from "../components/Homepage/AboutSection";
import HomeHero from "../components/Homepage/HomeHero";
import HeroListing from "../components/Listing/HeroListing";
import GotHereListing from "../components/Listing/GotHereListing";
import OllyFranc from "../components/Listing/OllyFranc";

const Index = ({ data }) => {
  return (
    <Layout>
      <HomeHero />
      <AboutSection />
      <HeroListing posts={data.posts.nodes} />
      <GotHereListing posts={data.posts.nodes} />
      <Listing posts={data.posts.nodes} />
      <OllyFranc />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(
      filter: { uid: { ne: "olly-franc-not-only-callout" } }
      limit: 20
      sort: { fields: [data___date], order: DESC }
    ) {
      nodes {
        uid
        data {
          hero_article
          how_you_got_here
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
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          date(formatString: "MMMM YYYY")
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
