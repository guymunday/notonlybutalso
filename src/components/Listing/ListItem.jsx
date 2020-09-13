import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Categories from "./Categories";
import Img from "gatsby-image";

const Item = styled.div`
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
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
        <h3>
          {/* {node.data.date} —{" "} */}
          {categories && <Categories categories={categories} />}
        </h3>

        <Link to={`/${categories[0]}/${node.uid}`}>
          <ItemInner>
            {/* <Img
            fluid={node.data.hero_image.localFile.childImageSharp.fluid}
            alt={node.data.title.text}
          /> */}
            <h2>{node.data.title.text}</h2>
            <h4>Words by {node.data.author.text}</h4>
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
