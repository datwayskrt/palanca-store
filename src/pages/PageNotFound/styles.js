import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const Logo = styled.img`
    height: 60px;
    width: 100px;
`;

export const Heading = styled.h1`
    font-size: 24px;
`;