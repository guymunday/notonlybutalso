import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Img from "gatsby-image";

const OllyFrancContainer = styled(motion.section)`
  margin-bottom: 70px;
  a {
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    padding: 30px;
    justify-content: center;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      text-align: center;
    }
    .sticker-images {
      position: relative;
      display: flex;
      width: 400px;
      margin: auto;
      @media screen and (max-width: 900px) {
        width: 100%;
        justify-content: center;
      }
      .gatsby-image-wrapper {
        border-radius: 50%;
        height: 200px;
        width: 200px;
        @media screen and (max-width: 900px) {
          width: 170px;
          height: 170px;
        }
        @media screen and (max-width: 400px) {
          width: 140px;
          height: 140px;
        }
      }
      .sticker-absolute {
        margin-left: -20px;
      }
    }
    .olly-inner {
      align-self: center;
      /* flex-grow: 1; */
      margin-left: 30px;
      @media screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: 30px;
        max-width: 480px;
      }
      h2 {
        font-size: 1.5rem;
      }
      h3 {
        font-weight: 450;
        font-size: 1.2rem;
        margin: 5px 0 20px 0;
      }
      p {
        :hover {
          color: var(--primary);
        }
      }
    }
  }
`;

const OllyFranc = () => {
  const data = useStaticQuery(graphql`
    query OllyFranc {
      allPrismicPost(filter: { uid: { eq: "olly-franc-not-only-callout" } }) {
        edges {
          node {
            id
            data {
              categories {
                category {
                  document {
                    data {
                      category_image {
                        localFile {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid_withWebp
                            }
                          }
                        }
                      }
                      name
                    }
                  }
                }
              }
              hero_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              title {
                text
              }
              title_two {
                text
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.allPrismicPost.edges.map(({ node }) => {
        return (
          <OllyFrancContainer>
            <Link to="/call-for-submissions/olly-franc-not-only-callout">
              <div className="sticker-images">
                <Img
                  fluid={
                    node.data.categories[0].category.document[0].data
                      .category_image.localFile.childImageSharp.fluid
                  }
                  alt="Olly&Franc Logo"
                />
                <Img
                  className="sticker-absolute"
                  fluid={node.data.hero_image.localFile.childImageSharp.fluid}
                  alt="Olly&Franc"
                />
              </div>
              <div className="olly-inner">
                <h2>{node.data.title.text}</h2>
                <h3>{node.data.title_two.text}</h3>
                <p>
                  Find out more{" "}
                  <span role="img" aria-label="pointing finger emoji">
                    👉
                  </span>
                </p>
              </div>
            </Link>
          </OllyFrancContainer>
        );
      })}
    </>
  );
};

export default OllyFranc;
