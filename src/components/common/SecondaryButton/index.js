import React from 'react'

import {
    Container,
    Label
} from './styles'

const SecondaryButton = (props) => {
    return(
        <Container>
            <Label>{props.title}</Label>
        </Container>
    )
}

export default SecondaryButton;