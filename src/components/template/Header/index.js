import reat from "react";
import ReactDom from 'react-dom';

import { 
    Container,
    Elements,
    InfoHeader,
    Heading, 
    Description,
    Img, 
    Button,
    Buttons,
    Brands,
    Apresent,
    Buckets,
    Sonifer,
    Cin
} from "./styles";

const Header = () => {
    return(
        <Container>
            <Elements>
                <InfoHeader>
                    <Heading>ENCONTRE A SOLUÇÃO <br></br> PERFEITA PARA O SEU LAR</Heading>
                    <Description>A Palanca Store é a rede retalhista de tintas
                    e electrodomésticos em Angola, com as melhores 
                    e mais conceituadas marcas do mercado.
                    </Description>

                    <Buttons>
                        <Button
                            to={{pathname: 'https://cin.com/deco/ao/pt/produtos' }}
                            target='_blank'
                            color='#2A3D7D'
                            textColor='#FAFAFA'
                        >Produtos</Button>

                        <Button
                            to={{pathname: 'https://cin.com/deco/pt/pt/catalogos' }}
                            target='_blank'
                            color='#F6F6F6'
                            textColor='#777'
                            border 
                        >Catálogo</Button>
                    </Buttons>
                    
                    <Apresent>Distribuidora das Marcas</Apresent>
                    
                    <Brands>  
                        <Cin src='./images/cin.png' alt='Logo CIN'/>
                        <Sonifer src='./images/sonifer.png' alt='Logo Sonifer'/>
                    </Brands> 
                </InfoHeader>

            {/* <ImageHeader> */}
                <Buckets src='./images/buckets.png' alt='Baldes de tinta'/>
            {/* </ImageHeader> */}

            </Elements>
        </Container>
    )
}

export default Header