import React from "react";
import Layout from "../components/Layout";
import PostWrapper from "../components/PostWrapper";
import SEO from "../components/SEO";
import website from "../../config/website";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

const PrivacyContainer = styled.div`
  margin: 45px auto;
  padding: 0 20px;
  max-width: 1000px;
  h3 {
    font-weight: 450;
    margin-bottom: -20px;
    strong {
      font-size: inherit;
      font-weight: 600;
    }
  }
  p {
    margin: 40px 0;
    strong {
      color: var(--primary);
      font-weight: 600;
    }
    em {
      font-style: oblique;
    }
  }
  ul {
    list-style-position: inside;
    list-style: none;
    li {
      :before {
        content: "💡";
        margin-right: 15px;
      }
    }
  }
`;

const Privacy = ({ data }) => {
  console.log(data.allPrismicPrivacy.nodes[0].data.privacy_text.html);
  return (
    <>
      <Layout>
        <SEO title={`Privacy Policy | ${website.titleAlt}`} />
        <PrivacyContainer
          dangerouslySetInnerHTML={{
            __html: data.allPrismicPrivacy.nodes[0].data.privacy_text.html,
          }}
        />
      </Layout>
    </>
  );
};

export default Privacy;

export const pageQuery = graphql`
  query Privacy {
    allPrismicPrivacy {
      nodes {
        data {
          privacy_text {
            html
          }
        }
      }
    }
  }
`;
