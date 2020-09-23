import React from 'react'
import styled from '@emotion/styled'

const Content = styled.div`
margin: 45px 0;
`

const BodyText = ({ input }) => <Content dangerouslySetInnerHTML={{ __html: input.primary.text.html }} />

export default BodyText
