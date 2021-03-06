import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import { Layout, PostWrapper, SliceZone, SEO } from "../components";
import Categories from "../components/Listing/Categories";
import website from "../../config/website";
import Img from "gatsby-image";
import ExploreListing from "../components/Listing/ExploreListing";

export const Hero = styled.section`
  text-align: center;
  margin-top: 45px;
  h1 {
    font-family: var(--text2);
    font-weight: 400;
    font-size: 2.8rem;
    max-width: 900px;
    padding: 0 10px;
    margin: 20px auto 0 auto;
    line-height: 1.3;
    @media screen and (max-width: 600px) {
      font-size: 2.3rem;
    }
  }
  h2 {
    font-family: var(--text1);
    font-weight: 600;
    font-size: 1.4rem;
    margin: 10px auto 20px auto;
  }
  .hero-info {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 45px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
    }
    .date {
      margin-left: 0.28em;
      @media screen and (max-width: 500px) {
        margin-left: 0;
      }
      p,
      span {
        font-size: 0.8rem;
        font-weight: 450;
        span {
          @media screen and (max-width: 500px) {
            display: none;
          }
        }
      }
    }
    .categories {
      a {
        font-size: 0.8rem;
        font-weight: 450;
      }
    }
  }
  .gatsby-image-wrapper {
    margin: 30px 0 0 0;
    box-shadow: var(--shadow);
  }
`;

const Latest = styled.div`
  margin: 80px 0 -20px 0;
  text-align: center;
  p {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;

const Post = ({ data: { prismicPost, posts }, location, uid }) => {
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
        desc={data.title_two.text}
        node={prismicPost}
        article
        banner={data.hero_image.url}
      />

      <Hero>
        <h1>{data.title.text}</h1>
        <PostWrapper>
          <h2>{data.title_two.text}</h2>
          <div className="hero-info">
            {categories && <Categories categories={categories} />}
            <div className="date">
              <p>
                <span>—</span> {data.date}
              </p>
            </div>
          </div>
          {data.hero_image.localFile !== null && (
            <Img
              fluid={data.hero_image.localFile.childImageSharp.fluid}
              alt="hello"
            />
          )}
        </PostWrapper>
      </Hero>
      <PostWrapper>
        <SliceZone allSlices={data.body} />
      </PostWrapper>
      <Latest>
        <p>See our latest posts</p>
      </Latest>
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
          url
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
        body {
          ... on PrismicPostBodyInternalLink {
            id
            slice_type
            items {
              label {
                text
              }
              link {
                id
                uid
                document {
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
          }
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
          ... on PrismicPostBodySeperator {
            slice_type
            id
            primary {
              seperator
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
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
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
          ... on PrismicPostBodyHeadshot {
            id
            slice_type
            items {
              headshot {
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
          body {
            ... on PrismicPostBodyInternalLink {
              id
              items {
                link {
                  id
                  uid
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
