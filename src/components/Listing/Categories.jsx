import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "@emotion/styled";

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((cat, i) => (
          <Link key={cat} to={`/discipline/${kebabCase(cat)}`}>
            {!!i && ", "}
            {cat}
          </Link>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
