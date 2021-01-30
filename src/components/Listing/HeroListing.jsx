import React from "react";
import styled from "@emotion/styled";
import HeroListItem from "./HeroListItem";
// import { Link, useStaticQuery } from "gatsby";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  column-gap: 50px;
  row-gap: 50px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 50px 15px 120px 15px;
  position: relative;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const HeroListing = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => {
        let categories = false;

        if (post.data.categories[0].category) {
          categories = post.data.categories.map(
            (c) => c.category.document[0].data.name
          );
        }

        if (post.data.hero_article) {
          return (
            <HeroListItem key={post.uid} node={post} categories={categories} />
          );
        }
      })}
    </List>
  );
};

export default HeroListing;
