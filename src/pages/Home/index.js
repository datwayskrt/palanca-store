import React from 'react'

import useWindowDimensions from '../../utils/useWindowDimensions'

import {
    Container
} from './styles'

import { 
    Menu,
    Solutions, 
    AboutTheCompany,
    Whatsapp, 
    Footer,
    Header
} from '../../components'

const Home = () => {

    const { height, width } = useWindowDimensions();

    return(
        <>
            <Container width={width}>
                <Menu/>
                <Header/>
                <Solutions/>
                <AboutTheCompany/>
                <Whatsapp/>
                <Footer/>
            </Container>
        </>
    )
}

export default Home;