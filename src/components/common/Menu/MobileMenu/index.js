import React from 'react'
import {useHistory} from 'react-router-dom'

import useWindowDimensions from '../../../../utils/useWindowDimensions'

import {
    Container,
    NavMenu,
    NavItem,
    NavLink,
    ContactButton
} from './styles'

const MobileMenu = (props) => {

    const history = useHistory();
    const { height, width } = useWindowDimensions();
    

    return (
        <Container width={width}>
            <NavMenu>
                <NavItem>
                    <NavLink  exact to='/' activeStyle>Início</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={{pathname: 'https://cin.com/deco/ao/pt/produtos' }} target='_blank' >Produtos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to={{pathname: 'http://www.sonifer.com/index.php/wap/product.html' }} target='_blank' >Catálogo</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/sobre-nos' activeStyle>Sobre nós </NavLink>
                </NavItem>
            </NavMenu>

            <ContactButton onClick={() => history.push('/contactos')}>Entrar em contacto</ContactButton>
        </Container>
    )
}

export default MobileMenu