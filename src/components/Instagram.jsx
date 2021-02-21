import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const InstagramGrid = styled.section`
  a {
    display: flex;
    .gatsby-image-wrapper {
      flex: 1;
      margin: 15px;
    }
  }
`;

export default function Instagram() {
  const instaData = useStaticQuery(graphql`
    {
      allInstaNode(limit: 4) {
        edges {
          node {
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
  `);

  return (
    <InstagramGrid>
      <a href="https://www.instagram.com/notonly___butalso/">
        {instaData?.allInstaNode?.edges?.map((posts, i) => {
          return (
            <Img
              fluid={posts?.node?.localFile?.childImageSharp?.fluid}
              alt=""
            />
          );
        })}
      </a>
    </InstagramGrid>
  );
}
