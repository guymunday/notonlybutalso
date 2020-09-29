import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const CategoriesButton = styled(motion.div)`
  display: inline-block;
  border-radius: 6px;
  flex-grow: 0;
  margin-right: 5px;
  a {
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
  }
`;

export default class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories.map((cat, i) => (
          <CategoriesButton key={cat} whileTap={{ scale: 0.98 }}>
            {!!i && ", "}
            <Link to={`/discipline/${kebabCase(cat)}`}>{cat}</Link>
          </CategoriesButton>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
