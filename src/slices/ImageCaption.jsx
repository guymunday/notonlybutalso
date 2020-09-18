import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  p {
    font-style: oblique;
  }
`;

const ImageCaption = ({ input }) => (
  <Content
    dangerouslySetInnerHTML={{ __html: input.primary.post_image_caption.html }}
  />
);

export default ImageCaption;
