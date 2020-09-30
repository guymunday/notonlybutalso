import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, Listing, PostWrapper, SliceZone, SEO } from "../components";
import Categories from "../components/Listing/Categories";
import website from "../../config/website";
import Img from "gatsby-image";
import ExploreListing from "../components/Listing/ExploreListing";

const Hero = styled.section`
  text-align: center;
  h1 {
    font-family: var(--text2);
    font-weight: 400;
    font-size: 1.8rem;
    margin-top: 20px;
  }
  h2 {
    font-family: var(--text1);
    font-weight: 600;
    font-size: 1.7rem;
    margin: 10px auto 20px auto;
  }
  a {
    font-size: 0.8rem;
  }
  h3 {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 450;
  }
  .gatsby-image-wrapper {
    margin: 30px 0;
  }
`;

const Credits = styled.div`
  margin: 60px 0;
  text-align: center;
  h3 {
    font-size: 1.2rem;
  }
`;

const Post = ({ data: { prismicPost, posts }, location }) => {
  const { data } = prismicPost;
  let categories = false;
  if (data.categories[0].category) {
    categories = data.categories.map((c) => c.category.document[0].data.name);
  }
  return (
    <Layout customSEO>
      <SEO
        title={`${data.title.text} | ${website.titleAlt}`}
        pathname={location.pathname}
        desc={data.description}
        node={prismicPost}
        article
      />
      <PostWrapper>
        <Hero>
          {data.hero_image.localFile !== null && (
            <Img
              fluid={data.hero_image.localFile.childImageSharp.fluid}
              alt="hello"
            />
          )}
          <h1>{data.title.text}</h1>
          <h2>{data.title_two.text}</h2>
          {categories && <Categories categories={categories} />}
          <h3>
            {data.author.text} — {data.date}
          </h3>
        </Hero>
        <SliceZone allSlices={data.body} />
        <Credits>
          <h3>Words by {data.author.text}</h3>
        </Credits>
      </PostWrapper>
      <p>Latest</p>
      <ExploreListing posts={posts.nodes} />
    </Layout>
  );
};

export default Post;

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      last_publication_date
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
        description
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
        body {
          ... on PrismicPostBodyWhoWhatWhere {
            id
            slice_type
            primary {
              what {
                html
              }
              based {
                html
              }
              where {
                html
              }
              who {
                html
              }
            }
          }
          ... on PrismicPostBodyImageCaption {
            slice_type
            id
            primary {
              post_image_caption {
                text
                html
              }
            }
          }
          ... on PrismicPostBodyEmbed {
            slice_type
            id
            primary {
              video {
                html
              }
            }
          }
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
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
    posts: allPrismicPost(
      limit: 3
      sort: { fields: [data___date], order: DESC }
      filter: { uid: { ne: $uid } }
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
