/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from "react";
import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";
import "@reach/skip-nav/styles.css";

import Footer from "./Footer";
import SEO from "./SEO";
import SkipNavLink from "./SkipNavLink";
import reset from "../styles/reset";
import Header from "./Header";

const globalStyle = css`
  ${reset}
  * {
    transition: font-size 0.4s ease;
    background: transparent;
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    --bg: gray;
    background-color: var(--bg);
  }

  body.dark {
    --bg: blue;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    font-weight: 600;
    margin: 0;
    padding: 0;
  }
  a {
    color: #000;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 450;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`;

const Layout = ({ children, data, customSEO }) => {
  return (
    <>
      <Global styles={globalStyle} />
      <SkipNavLink />
      <Header />
      {!customSEO && <SEO />}
      {children}
      <Footer />
    </>
  );
};

// class Layout extends Component {
//   render() {
//     return (
//       <StaticQuery
//         query={graphql`
//           query LayoutQuery {
//             prismicHomepage {
//               data {
//                 footer {
//                   html
//                 }
//               }
//             }
//           }
//         `}
//         render={(data) => (
//           <PureLayout {...this.props} data={data}>
//             {this.props.children}
//           </PureLayout>
//         )}
//       />
//     );
//   }
// }

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  data: PropTypes.object.isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
