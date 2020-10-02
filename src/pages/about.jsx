import React from "react";
import HomeHero from "../components/Homepage/HomeHero";
import Layout from "../components/Layout";
import PostWrapper from "../components/PostWrapper";
import SEO from "../components/SEO";
import SvgLogo from "../components/SvgLogo";
import website from "../../config/website";

const About = ({ data }) => {
  console.log(data);
  return (
    <>
      <Layout customSEO>
        <SEO
          title={`About | ${website.titleAlt}`}
          pathname={location.pathname}
          desc={data.description}
        />
        <PostWrapper>
          <SvgLogo color="var(--header)" size="100" />
          <HomeHero style={{ height: "100%" }} />
        </PostWrapper>
      </Layout>
    </>
  );
};

export default About;
