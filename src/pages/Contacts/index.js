import React from 'react'
import useWindowDimensions from '../../utils/useWindowDimensions'

import {
  Container,
  Empty
} from './styles'

import {
    Menu,
    Contact,
    Whatsapp,
    Footer
} from '../../components'

const Contacts = () => {

  const { height, width } = useWindowDimensions();

  return (
      <Container width={width}>
        <Menu/>
        <Contact />
        <Whatsapp/>
        <Footer/>
      </Container>
  )
}

export default Contacts