import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  p {
    font-size: 0.9rem;
    font-style: oblique;
    text-align: center;
    margin: -40px 0 45px 0;
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
