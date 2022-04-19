import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    height: 540px;
    width: 360px;
    background-color: purple;

    @media (max-width: 500px){
        width: 95%;
        height: 480px;
    }
`;

export const ImageContainer = styled.div`
    height: 460px;
    background-color: blue;

    @media (max-width: 500px){
        height: 400px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Button = styled(Link)`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary);
    padding: 0 20px;
    border: none;
    cursor: pointer;

    text-decoration: none;
`;

export const Label = styled.p`
    color: #FAFAFA;
    font-size: 20px;
    font-weight: 500;
`;