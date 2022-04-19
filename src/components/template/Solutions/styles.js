import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    background-color: #FAFAFA;

    /* border: 2px solid red; */
`;

export const Elements = styled.div`
    width: 100%;
    max-width: 1300px;
    /* gap: 2rem; */

    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    @media(max-width: 500px){
        margin: 0 1rem;
    }

    /* border: 2px solid purple; */
`;

export const Top = styled.div`
    /* display: flex;
    flex-direction: row; */
    margin-bottom: 3rem;

    @media(max-width: 500px){
        margin-bottom: 1.5rem;
    }
`;

export const Waves = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
`;

export const Heading = styled.h1`
    color: #2A3D7D;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;

    @media(max-width: 500px){
        font-size: 1.75rem;
    }
`;

export const Description = styled.p`
    color: #555555;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    /* margin: 2rem 0; */

    @media(max-width: 500px){
        font-size: 1.25rem;
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1240px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
`;