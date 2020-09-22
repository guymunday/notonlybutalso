import React, { Component } from "react";
import styled from "@emotion/styled";
import ListItem from "./ListItem";
import HeroListItem from "./HeroListItem";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
`;

const Listing = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => {
        let categories = false;

        if (post.data.categories[0].category) {
          categories = post.data.categories.map(
            (c) => c.category.document[0].data.name
          );
        }

        if (!post.data.hero_article) {
          return (
            <>
              <ListItem key={post.uid} node={post} categories={categories} />{" "}
            </>
          );
        }
      })}
    </List>
  );
};

export default Listing;
