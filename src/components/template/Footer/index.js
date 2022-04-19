import react from "react";
import {
    Block,
    Container,
    Elements,
    Links,
    LastItems,
    List,
    ListTitle,
    ItemInfo,
    Button,
    Logo, 
    Motto,
    Icon,
    Lists,
    Icons,
    Link,
    Line,
    Item,
} from './styles';

import logo from './assets/logo-palanca.png'
import letter from './assets/letter.png'
import tel from './assets/telephone.png'
import pin from './assets/location.png'
import fb from './assets/logo-fb.png'
import ig from './assets/logo-ig.png'
import wpp from './assets/logo-wpp.png'


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

const Footer = () =>{
    return(
        <Container>
            <Elements>
                <Links>
                    <Block>
                        <Logo src={logo} alt="Palanca Store" className="logo"/>
                        <Motto>Rede retalhista de tintas e<br/>
                        eletrodomésticos em Angola.</Motto>
                        <Icons>
                            {/* <Link><Icon src={fb} className='fb'/></Link> */}
                            <Link
                                href="https://www.instagram.com/palanca_store/"
                                target='_blank'
                            >
                                <Icon src={ig} className='ig'/>
                            </Link>
                            <Link
                                onClick={(e) => { e.preventDefault();
                                    window.location.href='https://api.whatsapp.com/send?phone=244930343312';
                                }}
                            >
                                <Icon src={wpp} className='wpp'/>
                            </Link>
                        </Icons>
                    </Block>
                    <Lists>
                        <List>
                            <ListTitle>Menus</ListTitle>
                            <Item href='/'>Início</Item>
                            <Item href='https://cin.com/deco/ao/pt/produtos' target='_blank' >Produtos</Item>
                            <Item href='https://cin.com/deco/pt/pt/catalogos' target='_blank'>Catálogo</Item>
                            <Item href='sobre-nos'>Sobre Nós</Item>
                            <Item href='contactos'>Contactos</Item>
                        </List>
                        <List>
                            <ListTitle>Soluções</ListTitle>
                            <Item href='https://cin.com/deco/ao/pt/interior' target='_blank'>Tintas de Interior</Item>
                            <Item href='https://cin.com/deco/ao/pt/exterior' target='_blank'>Tintas de Exterior</Item>
                            <Item href='http://www.sonifer.com/index.php/wap/product.html' target='_blank'>Eletrodomésticos</Item>
                        </List>
                        <List>
                            {/* <Item>Nossas lojas</Item>
                            <Item>Luanda, Benfica</Item>
                            <Item>Huambo, XYZ</Item> 
                            <Item><Icon src={pin} alt="Location"/>Benfica, Rua XYZ</Item>
                            */}

                            <ListTitle>Contacto</ListTitle>
                            <ItemInfo><Icon src={letter} className='letter' alt="Letter"/>contacto@palanca.ao</ItemInfo>
                            <ItemInfo><Icon src={tel} alt="Telephone"/>930 343 312</ItemInfo>
                        </List>
                    </Lists>
                </Links>

                <Line/>
                
                <LastItems>
                    <Item>Política de Privacidade</Item>
                    <Button onClick={scrollToTop}>VOLTAR AO TOPO</Button>
                </LastItems>
            </Elements>
        </Container>
    )
}

export default Footer