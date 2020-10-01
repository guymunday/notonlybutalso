import React from "react";
import styled from "@emotion/styled";
import HeroListItem from "./HeroListItem";
// import { Link, useStaticQuery } from "gatsby";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  margin: auto;
  padding: 50px 15px 120px 15px;
  position: relative;
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
