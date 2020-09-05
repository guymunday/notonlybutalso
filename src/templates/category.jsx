import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, Listing, Wrapper, Title, SEO, Header } from "../components";
import website from "../../config/website";
import CategoryDescription from "../components/Listing/CategoryDescription";

const Hero = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding-top: 1rem;
  padding-bottom: 4rem;
  h1 {
    color: ${props => props.theme.colors.bg};
  }
`;

const Headline = styled.p`
  font-family: "Source Sans Pro", -apple-system, "BlinkMacSystemFont",
    "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  color: ${props => props.theme.colors.greyBlue};
  font-size: 1.25rem;
  a {
    font-style: normal;
    font-weight: normal;
  }
`;

const CatWrapper = Wrapper.withComponent("main");

const Category = ({
  pageContext: { category },
  data: {
    posts: { nodes, totalCount }
  },
  location
}) => (
  <Layout>
    <SEO
      title={`Category: ${category} | ${website.titleAlt}`}
      pathname={location.pathname}
    />
    <Hero>
      <Wrapper>
        <Header invert />
        <Headline>Category</Headline>
        <h1>{category}</h1>
        <h2>
          FUCKKKK, actually maybe if i set up another component file and bring
          it in to this it might work. So copy the query below and bring it in
          as a component :)
        </h2>
        {(() => {
          if (category === "Strat") return <CategoryDescription />;
          else return <h3>Three</h3>;
        })()}
      </Wrapper>
    </Hero>
    <CatWrapper id={website.skipNavId}>
      <Title style={{ marginTop: "4rem" }}>
        {totalCount} {totalCount === 1 ? "Post" : "Posts"}{" "}
        {totalCount === 1 ? "was" : "were"} tagged with "{category}"
      </Title>
      <Listing posts={nodes} />
    </CatWrapper>
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
                       document: {
                         elemMatch: { data: { name: { eq: $category } } }
                       }
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


