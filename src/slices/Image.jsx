import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'

const Content = styled.div`
  margin: 45px 0;
  box-shadow: var(--shadow);
`;

const Image = ({ input }) => (
  <Content>
    <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
  </Content>
)

export default Image
