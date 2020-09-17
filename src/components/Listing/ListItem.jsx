import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";

const Item = styled.div`
  width: 100%;
  border-top: 1px solid var(--copy);
  border-bottom: 1px solid var(--copy);
  margin: 10px 0;
  display: flex;
`;

const Headline = styled.h3``;

const ItemInner = styled.div`
`;

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props;
    return (
      <Item>
        <h1>
          {/* {node.data.date} —{" "} */}
          {categories && <Categories categories={categories} />}
        </h1>

        <Link to={`/${categories[0]}/${node.uid}`}>
          <ItemInner>
            {/* <Img
            fluid={node.data.hero_image.localFile.childImageSharp.fluid}
            alt={node.data.title.text}
          /> */}
            <h2>{node.data.title.text}</h2>
            <h3>Words by {node.data.author.text}</h3>
          </ItemInner>
        </Link>
      </Item>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};
