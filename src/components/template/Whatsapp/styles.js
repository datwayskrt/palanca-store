import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding: 4rem 0;
    background-color: #EBEBEB;
    display: flex;
    align-items: center;
    justify-content: center;

    /* border: 2px solid red; */
`;

export const Elements = styled.div`
    width: 100%;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    @media(max-width: 1200px){
        flex-direction: column;
        justify-content: center;
        gap: 1.5rem;
    }

    @media(max-width: 500px){
        margin: 0 1rem;
    }

    /* border: 2px solid purple; */
`;

export const TextGroup = styled.div``;

export const Heading = styled.h1`
    color: #1C1C1E;
    font-size: 2rem;
    line-height: 42px;
    font-weight: bold;
    margin-bottom: 0.75rem;

    @media(max-width: 1200px){
        text-align: center;
    }

    @media(max-width: 500px){
        font-size: 1.75rem;
    }
`;

export const Description = styled.p`
    color: #555555;
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 800px;

    @media(max-width: 1200px){
        text-align: center;
    }

    @media(max-width: 500px){
        font-size: 1.25rem;
    }
`;

export const Button = styled.button`
    width: 250px;
    height: 62px;
    border: none;
    background-color: #3CC24E;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const Label = styled.p`
    color: #FAFAFA;
    font-size: 1rem;
    font-weight: 500;
`;

export const Image = styled.img`
    width: 30px;
    margin-right: 10px;
`;