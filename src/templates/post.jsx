import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import {
  Layout,
  Listing,
  PostWrapper,
  SliceZone,
  Title,
  SEO,
} from "../components";
import Categories from "../components/Listing/Categories";
import website from "../../config/website";
import Img from "gatsby-image";

const Hero = styled.header`
  div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
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
          <Img
            fluid={data.hero_image.localFile.childImageSharp.fluid}
            alt="hello"
          />
          <h1>{data.title.text}</h1>
          <div>
            <h3>Words by {data.author.text}</h3>
            <h2>
              {data.date} —{" "}
              {categories && <Categories categories={categories} />}
            </h2>
          </div>
        </Hero>
        <SliceZone allSlices={data.body} />
      </PostWrapper>
      <Title style={{ marginTop: "4rem" }}>Latest</Title>

      <Listing posts={posts.nodes} />
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
              }
            }
          }
        }
        body {
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
      limit: 2
      sort: { fields: [data___date], order: DESC }
      filter: { uid: { ne: $uid } }
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
                }
              }
            }
          }
        }
      }
    }
  }
`;
