import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #F6F6F6;
    padding: 4rem 0;
    display: flex;
    justify-content: center;

    @media(max-width: 768px){
        padding: 4rem 0 0 0;
    }

    /* border: 2px solid red; */
`;

export const Elements = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1300px;

    /* border: 2px solid purple; */

    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    @media(max-width: 1030px){
        flex-direction: column;
        gap: 2rem;
    }

    @media(max-width: 768px){
        padding: 0;
        margin: 0;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    /* gap: 2rem; */

    /* border: 2px solid green; */

    //column
    @media(max-width: 1030px){
        align-items: center;
    }
`;

export const Logo = styled.img`
    width: 200px;
    height: 47px;
    margin-bottom: 2.5rem;

    @media(max-width: 500px){
        width: 180px;
        height: 40px;
    }
`;

export const Pattern = styled.img`
    width: 320px;
    height: 13px;
    margin-bottom: 2.5rem;

    @media(max-width: 500px){
        width: 260px;
        height: 10px;
    }
`;

export const Right = styled.div`
    height: 800px;
    width: 620px;

    /* border: 2px solid yellow; */

    @media(max-width: 1250px){
        width: 520px;
        height: 680px;
    }

    @media(max-width: 1120px){
        width: 450px;
        height: 680px;
    }

    @media(max-width: 1030px){
        width: 80%;
        height: 600px;
    }

    @media(max-width: 768px){
        width: 100%;
        height: 480px;
    }
`;

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Button = styled.button`
    color: #777;
    font-size: 1rem;
    width: 250px;
    height: 62px;
    font-weight: 500;
    background-color: #F6F6F6;
    border: 2px solid #777;

    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        cursor: pointer;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }
`;

export const Heading = styled.h1`
    color: #1C1C1E;
    font-size: 2rem;
    line-height: 42px;
    font-weight: bold;
    margin-bottom: 0.75rem;

    //column
    @media(max-width: 1030px){
        text-align: center;
    }

    @media(max-width: 500px){
        font-size: 1.5rem;
    }
`;

export const Description = styled.p`
    color: #555555;
    font-size: 1.5rem;
    line-height: 2rem;
    max-width: 450px;
    text-align: justify;
    text-justify: inter-word;
    margin-bottom: 1.5rem;

    //column
    @media(max-width: 1030px){
        text-align: center;
    }

    @media(max-width: 500px){
        font-size: 1.25rem;
    }
`;

export const TextWrapper = styled.div``;