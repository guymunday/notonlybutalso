import React from "react";
import Layout from "../components/Layout";
import HeroHome from "../components/Homepage/HomeHero";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const FourOhFour = styled.div`
  padding: 30px;
  max-width: 720px;
  margin: auto;
  text-align: center;
  h1 {
    font-size: 2.2rem;
    margin-bottom: 20px;
    span {
      font-size: 2.2rem;
    }
  }
  a {
    font-size: 2.2rem;
    span {
      font-size: 2.2rem;
    }
  }
`;

const Page404 = () => {
  return (
    <>
      <Layout>
        <FourOhFour>
          <h1>
            404: Whoops, looks like you've reached a dead end.{" "}
            <span role="img" aria-label="facepalm emoji">
              🤦‍♀️
            </span>
          </h1>
          <Link to="/">
            Head back <span>🏠</span>
          </Link>
        </FourOhFour>
        <HeroHome />
      </Layout>
    </>
  );
};

export default Page404;
