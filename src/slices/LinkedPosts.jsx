import React from "react";
import styled from "@emotion/styled";
import { ListItem } from "../components/Listing";

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  margin: auto;
  position: relative;
`;

const LinkedPosts = ({ input }) => {
  return (
    <List>
      {input?.items?.map((post) => {
        let categories = false;

        if (post.link.document[0].data.categories[0].category) {
          categories = post.link.document[0].data.categories.map(
            (c) => c.category.document[0].data.name
          );
        }
        return (
          <>
            <p>{post?.label?.text}</p>
            <ListItem node={post.link.document[0]} categories={categories} />
          </>
        );
      })}
    </List>
  );
};

export default LinkedPosts;
