import React from 'react'

import {
    Container,
    Elements,
    Heading,
    Description,
    StoreImage,
    Pattern
} from './styles'

const History = () => {
    return (
        <Container>
            <Elements>
                <Heading>Sobre nós</Heading>
                
                <Pattern
                        src='./images/pattern-dots.png'
                        alt='Padrões da Palanca Store'
                />

                <Description>Fundada em 2020, a Palanca Store é uma rede retalhista de tintas e eletrodomésticos em Angola, com uma essência familiar, os nosso comprimissos com os clientes baseam-se em ética, respeito e transparência.
                Atuamos no mercado de tintas decorativas, industriais, repintura automotiva e acessórios, apresentando as melhores e mais conceituadas marcas disponíveis no mercado.</Description>

                <StoreImage src='./images/loja.png' />

                <Description>Sendo uma rede retalhista estamos dedicados a oferecer-lhe o máximo de soluções possíveis, o nosso conceito é “colorir o seu lar”, razão de sermos referência no mercado de tintas e eletrodomésticos em Angola, com produtos de qualidade e atendimento de excelência.</Description>
                
                {/* <Heading>Benefícios</Heading>

                <Description>Para comprar na Palanca Store não precisa sair de casa, fazemos entregas ao domicilio e mantemos-lhe informado das nossas últimas novidades e promoções.</Description> */}
            </Elements>
        </Container>
    )
}

export default History