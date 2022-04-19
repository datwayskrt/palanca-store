import React from 'react'

import {
    Container,
    Elements,
    TextGroup,
    Heading,
    Description,
    Button,
    Label,
    Image
}
from './styles'

const Whatsapp = () => {
    return(
        <Container>
            <Elements>
                <TextGroup>
                    <Heading>Compre pelo Whatsapp</Heading>
                    <Description>Faça compras sem precisar sair de casa através do nosso whatsapp, e fique também informado das últimas novidades e promoções.</Description>
                </TextGroup>
                <Button 
                    onClick={(e) => { e.preventDefault();
                    window.location.href='https://api.whatsapp.com/send?phone=244930343312';
                    }}
                >
                    <Image src='/images/Whatsapp.png' />
                    <Label>Entrar em contacto</Label>
                </Button>
            </Elements>
        </Container>
    )
}

export default Whatsapp