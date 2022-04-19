import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 4rem 0;
    background-color: #F6F6F6;
    display: flex;
    justify-content: center;

    /* border: 2px solid red; */
`;

export const Elements = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    @media(max-width: 500px){
        margin: 0 1rem;
    }
    
    /* border: 2px solid purple; */
`;

export const Heading = styled.h1`
    color: #1C1C1E;
    font-size: 2rem;
    line-height: 42px;
    font-weight: bold;
    margin: 0.5rem 0;
    text-align: center;

    @media(max-width: 500px){
        font-size: 1.75rem;
    }
`;

export const Description = styled.p`
    color: #555555;
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: justify;

    @media(max-width: 500px){
        font-size: 1.25rem;
    }
`;

export const StoreImage = styled.img`
    width: 100%;
    margin: 2rem;
    width: 100%;
    max-width: 900px;
`;

export const Pattern = styled.img`
    width: 320px;
    height: 13px;
    margin: 0.5rem 0 1.5rem 0;

    @media(max-width: 500px){
        width: 260px;
        height: 10px;
    }
`;