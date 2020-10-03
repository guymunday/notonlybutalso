import React from "react";
import { useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const GuyMaddiImage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicSingleImage(
        filter: {
          id: {}
          data: {
            single_image: {
              localFile: {
                childImageSharp: {
                  id: { eq: "a533a146-e7d5-520c-b1be-b750912de7ea" }
                }
              }
            }
          }
        }
      ) {
        nodes {
          data {
            single_image {
              alt
              localFile {
                childImageSharp {
                  id
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(
    data.allPrismicSingleImage.nodes[0].data.single_image.localFile
      .childImageSharp.fluid
  );

  return (
    <Img
      fluid={
        data.allPrismicSingleImage.nodes[0].data.single_image.localFile
          .childImageSharp.fluid
      }
      alt={data.allPrismicSingleImage.nodes[0].data.single_image.alt}
    />
  );
};

export default GuyMaddiImage;
