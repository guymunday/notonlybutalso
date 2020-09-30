import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "@emotion/styled";

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        {categories.map((cat, i) => (
          <Link
            key={cat}
            to={`/${kebabCase(cat)}`}
            style={{ display: "inline" }}
          >
            {!!i && ", "}
            {cat}
          </Link>
        ))}
      </>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
