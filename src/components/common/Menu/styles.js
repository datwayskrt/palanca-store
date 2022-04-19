import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: ${props => props.width >= 920 ? '100px' : '65px'};
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FAFAFA;

    /* border: 2px solid red; */
`;

export const ContactsSection = styled.div`
    width: 100%;
    height: 35%;
    border-bottom: 2px solid #E9E9E9;
    display: flex;
    justify-content: center;

    /* background-color: red;
    border-bottom: 2px solid blue; */
`;

export const ContactGroup = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    /* background-color: red; */
`;

export const Nav = styled.nav`
    width: 100%;
    height: ${props => props.width >= 920 ? '65%' : '100%'};
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #E9E9E9;
`;

export const NavElements = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 1400px){
        margin: 0 3rem;
    }
`;

export const Contact = styled.div`
    display: flex;
    flex-direction: row;

    /* border: 2px solid purple; */
`;

export const Label = styled.p`
    color: #777;
    font-size: 1rem;
    font-weight: 500;
    margin-left: 0.5rem;
`;

export const NavLogo = styled.img`
    height: 65%;
    cursor: pointer;
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    text-decoration: none;
    gap: 35px;
    margin-left: 80px;
    /* border: 2px solid red; */
`;

export const NavItem = styled.li`
    color: #777;
    text-decoration: none;
`;

export const NavLink = styled(Link)`
    color: #999;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;

    &.active {
        color: #2A3D7D;
        font-weight: bold;
        /* border-bottom: 2px solid #2A3D7D; */
    } 
`;

export const MobileMenuIcon = styled.div``;

export const ContactButton = styled.button`
    cursor: pointer;
    color: #777;
    font-size: 1rem;
    padding: 0.7rem;
    font-weight: 500;
    background-color: #FAFAFA;
    border: 2px solid #777;

    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }

    &.active {
        color: #FAFAFA;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    } 
`;