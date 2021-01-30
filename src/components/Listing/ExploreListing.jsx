import React from "react";
import HeroListItem from "./HeroListItem";
import { List } from "./HeroListing";

const ExploreListing = ({ posts }) => {
  return (
    <List>
      {posts.map((post) => {
        let categories = false;

        if (post.data.categories[0].category) {
          categories = post.data.categories.map(
            (c) => c.category.document[0].data.name
          );
        }
        
        return (
          <>
            <HeroListItem key={post.uid} node={post} categories={categories} />
          </>
        );
      })}
    </List>
  );
};

export default ExploreListing;
