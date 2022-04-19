import React from 'react'
import {BsArrowRight} from 'react-icons/bs' 
import {useHistory} from 'react-router-dom'

import {
    Container,
    ImageContainer,
    Image,
    Button,
    Label
} from './styles'

const Card = (props) => {

    const history = useHistory();

    return(
        <Container >
            <ImageContainer>
                <Image src={props.src} />
            </ImageContainer>
            <Button to={{pathname: props.link }} target='_blank' >
                <Label>{props.title}</Label>
                <BsArrowRight size={32} color='#FAFAFA' />
            </Button>
        </Container>
    )
}

export default Card;