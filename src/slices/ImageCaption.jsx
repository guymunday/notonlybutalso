import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  p {
    font-size: 0.8rem;
    font-style: oblique;
    text-align: center;
    margin: -35px auto 45px auto;
    max-width: 500px;
    a {
      font-size: inherit;
    }
  }
`;

const ImageCaption = ({ input }) => (
  <Content
    dangerouslySetInnerHTML={{ __html: input.primary.post_image_caption.html }}
  />
);

export default ImageCaption;
