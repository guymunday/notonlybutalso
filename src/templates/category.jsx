import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, SEO } from "../components";
import website from "../../config/website";
// import StrategyHeader from "../components/Listing/StrategyHeader";
// import UxHeader from "../components/Listing/UxHeader";
import ExploreListing from "../components/Listing/ExploreListing";

const Hero = styled.header`
  width: 100%;
  max-width: 900px;
  margin: 40px auto -60px auto;
  padding: 50px 15px;
  h1 {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

const Category = ({
  pageContext: { category },
  data: {
    posts: { nodes, totalCount },
  },
  location,
}) => (
  <Layout>
    <SEO
      title={`${category} | ${website.titleAlt}`}
      pathname={location.pathname}
    />
    <Hero>
      <h1>{category}</h1>
      <p>
        {totalCount} {totalCount === 1 ? "Post" : "Posts"}{" "}
        {totalCount === 1 ? "was" : "were"} tagged with "{category}"
      </p>
    </Hero>
    <ExploreListing posts={nodes} />
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
