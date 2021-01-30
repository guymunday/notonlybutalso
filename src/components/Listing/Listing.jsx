import React from "react";
import styled from "@emotion/styled";
import HeroListItem from "./HeroListItem";
import { List } from "./HeroListing";

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
              <HeroListItem
                key={post.uid}
                node={post}
                categories={categories}
              />
            </div>
          );
        }
      })}
    </List>
  );
};

export default Listing;
