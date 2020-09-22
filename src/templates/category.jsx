import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, Listing, Wrapper, Title, SEO } from "../components";
import website from "../../config/website";
import StrategyHeader from "../components/Listing/StrategyHeader";
import UxHeader from "../components/Listing/UxHeader";

const Hero = styled.header``;

const Headline = styled.p``;

const Category = ({
  pageContext: { category },
  data: {
    posts: { nodes, totalCount },
  },
  location,
}) => (
  <Layout>
      <SEO
        title={`Category: ${category} | ${website.titleAlt}`}
        pathname={location.pathname}
      />
      <Hero>
          <Headline>Category</Headline>
          <h1>{category}</h1>
          {(() => {
            if (category === "Strat") {
              return <StrategyHeader />;
            } else if (category === "UX") {
              return <UxHeader />;
            }
          })()}
      </Hero>
        <Title style={{ marginTop: "4rem" }}>
          {totalCount} {totalCount === 1 ? "Post" : "Posts"}{" "}
          {totalCount === 1 ? "was" : "were"} tagged with "{category}"
        </Title>
        <Listing posts={nodes} />
  </Layout>
);

export default Category;

export const pageQuery = graphql`
  query CategoryPage($category: String!) {
    posts: allPrismicPost(
      sort: { fields: [data___date], order: DESC }
      filter: {
        data: {
          categories: {
            elemMatch: {
              category: {
                document: { elemMatch: { data: { name: { eq: $category } } } }
              }
            }
          }
        }
      }
    ) {
      totalCount
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
