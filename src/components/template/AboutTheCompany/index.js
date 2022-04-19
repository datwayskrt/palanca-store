import react from 'react'
import {useHistory} from 'react-router-dom'

import { 
    Container, 
    Elements,
    Right, 
    Left, 
    Logo,
    Pattern,
    Heading,
    Description,
    TextWrapper,
    Button,
    Img
} from './styles'

const AboutTheCompany = () => {

    const history = useHistory();

    return( 
        <Container>
           <Elements>
                <Left>
                    <Logo
                        src='./images/logo-preta.png'
                        alt='Logo da Palanca Store'
                    />
                    <Pattern
                        src='./images/pattern-dots.png'
                        alt='Padrões da Palanca Store'
                    />

                    <TextWrapper>
                        <Heading>SOBRE A EMPRESA</Heading>
                        <Description>Fundada em 2020 em Luanda, a Palanca Store é uma rede retalhista de tintas e eletrodomésticos em Angola. Com essência familiar, baseia-se em ética, respeito e transparência na relação com os seus clientes.</Description>
                    </TextWrapper>
                    
                    <Button onClick={() => history.push('/sobre-nos')}>Saber mais</Button>
                </Left>

                <Right>
                    <Img src='./images/loja-02.png' alt='Interior da loja da Palanca Store'/>
                </Right>
            </Elements>
        </Container>
    )
}

export default AboutTheCompany;