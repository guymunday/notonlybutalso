import React, { Component } from "react";
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { Layout, Listing, Wrapper, Title } from "../components";
import Img from "gatsby-image";

class Index extends Component {
  render() {
    const {
      data: { homepage, posts },
    } = this.props;
    return (
      <Layout>
          <Listing posts={posts.nodes} />
      </Layout>
    );
  }
}

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
