import React from 'react'
import Card from '../../common/Card'

import {
    Container,
    Elements,
    Top,
    Waves,
    Heading,
    Description,
    CardsContainer
} from './styles'

const Solutions = () => {
    return(
        <Container>
            <Elements>
                <Top>
                    <Waves>
                        <img src='/images/linhas.png' />
                    </Waves>
                    <Heading>Soluções</Heading>
                    <Description>Oferecemos soluções que vão de tintas para os acabamentos no interior ou exterior, até aos melhores electrodomésticos. Explore uma variedade de produtos através do site das marcas. </Description>
                </Top>

                <CardsContainer>
                    <Card
                        src='/images/interior.png'
                        title='Tintas de interior'
                        link='https://cin.com/deco/ao/pt/interior'
                    />
                    <Card
                        src='/images/exterior.png'
                        title='Tintas de exterior'
                        link='https://cin.com/deco/ao/pt/exterior'
                    />
                    <Card
                        src='/images/cozinha.png'
                        title='Electrodomésticos'
                        link='http://www.sonifer.com/index.php/wap/product.html'
                    />
                </CardsContainer>
            </Elements>
        </Container>
    )
}

export default Solutions;