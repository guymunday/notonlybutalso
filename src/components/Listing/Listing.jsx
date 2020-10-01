import React from "react";
import styled from "@emotion/styled";
import HeroListItem from "./HeroListItem";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px;
  @media screen and (max-width: 500px) {
    padding: 15px;
  }
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

        if (!post.data.hero_article && !post.data.how_you_got_here) {
          return (
            <div>
              <HeroListItem key={post.uid} node={post} categories={categories} />{" "}
            </div>
          );
        }
      })}
    </List>
  );
};

export default Listing;
