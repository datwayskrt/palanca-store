import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import MobileMenu from './MobileMenu'

import useWindowDimensions from '../../../utils/useWindowDimensions'

import { MdMenu, MdClose } from 'react-icons/md'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

import {
    Container,
    ContactsSection,
    ContactGroup,
    Contact,
    Nav,
    NavElements,
    Label,
    NavLogo,
    NavMenu,
    NavItem,
    NavLink,
    MobileMenuIcon,
    ContactButton,
} from './styles'

const Menu = () => {

    const history = useHistory();
    const { height, width } = useWindowDimensions();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const IconConfig = {
        color: '#777',
        contactIconSize: 20,
        menuIconSize: 34
    } 

    return(
        <Container width={width}>
            {(width >= 920) ?
                <>
                    <ContactsSection>
                        <ContactGroup>
                            <Contact>
                                <HiOutlineMail color={IconConfig.color} size={IconConfig.contactIconSize} />
                                <Label>Contacto@palanca.ao</Label>
                            </Contact>
                            <Contact>
                                <HiOutlinePhone color={IconConfig.color} size={IconConfig.contactIconSize} />
                                <Label>930 343 312</Label>
                            </Contact>
                        </ContactGroup>
                    </ContactsSection>
                </>
                : null 
            }

            <Nav width={width}>
                <NavElements>
                    <NavLogo 
                        onClick={() => history.push('/')}
                        src='./images/logo.png'
                    />

                    {(width >= 920) ?
                        <>
                            <NavMenu>
                                <NavItem>
                                    <NavLink exact to='/' activeStyle>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={{pathname: 'https://cin.com/deco/ao/pt/produtos' }} target='_blank'>Produtos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={{pathname: 'https://cin.com/deco/pt/pt/catalogos' }} target='_blank' >Catálogo</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/sobre-nos' activeStyle>Sobre nós </NavLink>
                                </NavItem>
                            </NavMenu>

                            <ContactButton onClick={() => history.push('/contactos')} activeStyle>Entrar em contacto</ContactButton>
                        </>
                        :
                        <>
                            <MobileMenuIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                                {isMenuOpen
                                    ? <MdClose color={IconConfig.color} size={IconConfig.menuIconSize} />
                                    : <MdMenu color={IconConfig.color} size={IconConfig.menuIconSize} />
                                }
                            </MobileMenuIcon>
                        </>
                    }

                    {(isMenuOpen && width < 920) ? <MobileMenu /> : null}
                </NavElements>
            </Nav>
        </Container>
    )
}

export default Menu;