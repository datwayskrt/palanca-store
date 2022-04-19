import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: ${props => props.width >= 920 ? 'calc(100vh - 100px)' : 'calc(100vh - 35px)' };
    background-color: #FAFAFA;
    position: fixed;
    left: 0;
    top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    gap: 4rem;

    /* border: 2px solid purple; */
`;

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    text-decoration: none;
    gap: 4rem;

    /* border: 2px solid red; */
`;

export const NavItem = styled.li`
    /* color: #777;
    text-decoration: none; */
`;

export const NavLink = styled(Link)`
    color: #777;
    font-weight: 500;
    font-size: 1.25rem;
    text-decoration: none;

    &.active {
        color: #2A3D7D;
        font-weight: bold;
    } 
`;

export const ContactButton = styled.button`
    color: #777;
    font-size: 1.25rem;
    padding: 1rem;
    font-weight: 500;
    background-color: #FAFAFA;
    border: 2px solid #777;

    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        cursor: pointer;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }
`;