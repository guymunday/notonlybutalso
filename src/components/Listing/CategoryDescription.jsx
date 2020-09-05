import React, { Component } from "react";
import styled from "@emotion/styled";
import { StaticQuery, graphql } from "gatsby";

const CategoryDescription = styled.h3`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
  font-size: 80px;
`;

// export default () => (
//   <StaticQuery
//     query={graphql`
//       query DescriptionQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => <h3>{data.site.siteMetadata.title}</h3>}
//   />
// );

export default () => <CategoryDescription>Strategy is </CategoryDescription>