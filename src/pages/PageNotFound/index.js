import React from 'react'

import {
    Container,
    Content,
    Logo,
    Heading
} from './styles'

const PageNotFound = () => {
  return (
      <Container>
          <Content>
            <Logo src='./images/logo.png' />
            <Heading>Página não encontrada!</Heading>
          </Content>
      </Container>
  )
}

export default PageNotFound