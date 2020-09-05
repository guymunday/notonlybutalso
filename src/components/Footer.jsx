import React, { Component } from 'react'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 6rem auto 0 auto;
  padding: 2rem;
  color: ${(props) => props.theme.colors.grey};
`

class Footer extends Component {
  render() {
    return <StyledFooter>Hello</StyledFooter>
  }
}

export default Footer

