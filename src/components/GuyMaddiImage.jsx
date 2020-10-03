import React from "react";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const GuyMaddiImage = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allImageSharp(
        filter: { id: { eq: "a533a146-e7d5-520c-b1be-b750912de7ea" } }
      ) {
        nodes {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
          id
        }
      }
    }
  `);
  
  return (
    <Img
      fluid={data.allImageSharp.nodes[0].fluid}
      alt="Guy and Maddi, founders of Not Only — But Also"
    />
  );
};

export default GuyMaddiImage;
