import React from 'react'
import useWindowDimensions from '../../utils/useWindowDimensions'

import {
  Container
} from './styles'

import { 
  Menu,
  History,
  Whatsapp, 
  Footer
} from '../../components'

const AboutUs = () => {

    const { height, width } = useWindowDimensions();

    return (
        <Container width={width}>
            <Menu />
            <History />
            <Whatsapp />
            <Footer />
        </Container>
    )
}

export default AboutUs