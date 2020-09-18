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
  .gatsby-image-wrapper {
    width: 50%;
    height: 300px;
    object-fit: cover;
  }
`;

const ItemInner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export default class ListItem extends Component {
  render() {
    const { node, categories } = this.props;
    return (
      <Item>
        <Img
          fluid={node.data.hero_image.localFile.childImageSharp.fluid}
          alt={node.data.title.text}
        />

        <ItemInner>
          <h1>
            {/* {node.data.date} —{" "} */}
            {categories && <Categories categories={categories} />}
          </h1>
          <Link to={`/${categories[0]}/${node.uid}`}>
            <h2>{node.data.title.text}</h2>
            <h3>Words by {node.data.author.text}</h3>
          </Link>
        </ItemInner>
      </Item>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
};
