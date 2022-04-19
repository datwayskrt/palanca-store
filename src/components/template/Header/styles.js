import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    background-color: #F6F6F6;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    min-height: 90vh;
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

    @media(max-width: 1260px){
        flex-direction: column;
        gap: 0.75rem;
    }

    @media(max-width: 768px){
        padding: 0;
        margin: 0;
    }
`;

export const InfoHeader= styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;

    /* border: 2px solid green; */

    @media(max-width: 1260px){
        align-items: center;
    }
`;

export const ImageHeader = styled.div`
    height: 770px;
    width: 640px;

    border: 2px solid yellow;

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

export const Img = styled.img``;

export const Buckets = styled.img`
    height: 630px;
    width: 700px;

    /* border: 2px solid yellow; */

    @media(max-width: 1250px){
        width: 620px;
        height: 550px;
    }

    @media(max-width: 768px){
        width: 520px;
        height: 450px;
    }

    @media(max-width: 540px){
        width: 345px;
        height: 325px;
        /* height: 450px; */
    }
`;

export const Heading = styled.h1`
    color: #2A3D7D;
    font-size: 2rem;
    line-height: 42px;
    font-weight: bold;
    margin-bottom: 0.75rem;

    //column
    @media(max-width: 1260px){
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
    margin-bottom: 1rem;

    //column
    @media(max-width: 1260px){
        text-align: center;
    }

    @media(max-width: 500px){
        font-size: 1.25rem;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 500px){
        flex-direction: column;
        gap: 1rem;
    }
`;

export const Brands = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 10vw;

    @media (max-width: 1260px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const Cin = styled.img`
    margin-top: 10px;
    width: 90px;
    height: 42px;

    @media (max-width: 500px) {
        width: 73px;
        height: 33px;
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
    }
`;

export const Sonifer = styled.img`
    width: 145px;
    height: 77px;

    @media (max-width: 500px) {
        width: 120px;
        height: 70px;
    }
`;


export const Apresent = styled.h4`
    font-size: 1.25rem;
    font-weight: bolder;
    color: #C4C4C4;
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    @media (max-width: 1260px){ font-size: 1rem; }
    @media (max-width: 500px){ text-align: center; }
`;

export const Button = styled(Link)`
    width: 220px;
    height: 62px;
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.textColor};
    background-color: ${props => props.color};
    border: ${props => props.border ? '2px solid #777' : 'none'};
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    @media(max-width: 500px){
        width: 250px;
    }

    /* &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        cursor: pointer;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    } */
`;