import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 4rem 0;
    display: flex;
    justify-content: center;
    background-color: #323232;
`;

export const Elements = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1300px;

    @media(max-width: 1400px){
        margin: 0 3rem;
    }

    @media(max-width: 768px){
        padding: 0;
        margin: 0;
    }

    /* border: 2px solid purple; */
`;

export const Block= styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & >:last-child {
        display: flex;
        justify-content: flex-start;
        margin-top: 1rem;
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        flex-flow: column nowrap;
        align-items: center;
        text-align: justify;
        
    }

    /* border: 2px solid red; */
`;

export const Links = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    max-width: 1300px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        gap: 2rem;
    }
 
    /* border: 2px solid green; */
`;

export const Line = styled.div`
    margin: 2rem 0;
    border: 2px solid #888888;

    @media(max-width: 768px){
        margin: 2rem;
    }
`;

export const LastItems = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    @media(max-width: 768px){
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       width: 100%;
       height: 20%;
       gap: 1rem;
    }
`;

export const List = styled.div`

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const ListTitle = styled.p`
    color: #FAFAFA;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;

export const Item = styled.a`
    font-size: 1em;
    font-weight: 500;
    margin-bottom: .5em;
    padding: .25rem;
    list-style: none;
    text-align: left;
    color: #888888;
    text-decoration: none;
    display: flex;

    /* border: 2px solid green; */

    .letter {
        height: 15px;
    }

    @media(max-width: 768px){
        margin: .3rem;
        text-align: center;
    }

    &:hover {
        cursor: pointer;
        color: #FAFAFA;
    }
`;

export const ItemInfo = styled.p`
    font-size: 1em;
    font-weight: 500;
    margin-bottom: .5em;
    padding: .25rem;
    list-style: none;
    text-align: left;
    color: #888888;
    text-decoration: none;
    display: flex;

    /* border: 2px solid green; */

    .letter {
        height: 15px;
    }

    @media(max-width: 768px){
        margin: .3rem;
        text-align: center;
    }
`;

export const Button = styled.button`
    border: none;
    width: 162px;
    height: 45px;    
    font-weight: 600;
    color: #323232;
    background-color: #888888;
    text-transform: uppercase;
    
    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        cursor: pointer;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }
`;

export const Logo = styled.img`
    width: 120px;
    height: 80px;
    margin-bottom: 1rem;
    
    @media(max-width: 768px){
        width: 90px;
        height: 50px;
        }
`;

export const Motto = styled.div`
    color: #888;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    max-width: 450px;
    text-align: justify;
    text-justify: inter-word;
    margin: 0;
    
    @media(max-width: 768px){
        text-align: center;
    }    
`;

export const Icon = styled.img`
    width: 18px;
    height: 18px;
    margin-top: .11rem;
    margin-right: .75rem;
`;

export const Lists = styled.ul`
    display: flex;
    margin: 0;
    justify-content: center;
    gap: 1.5rem;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: left;
        padding: 0;
        gap: 2rem;
    }

    /* border: 2px solid purple; */
`;

export const Icons = styled.div`
    display: flex; 
    justify-content: left;
    /* border:2px solid red; */
`;

export const Link = styled.a`
    width: 50px;
    height: 50px;
    background-color: #888888;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid #888888;
    margin-right: .7rem;
    
    &:hover {
        cursor: pointer;
    }

    .fb {
        margin: 0;
        width: 17px;
        height: 30px;
    }
    .ig {
        margin: 0;
        width: 30px;
        height: 30px;

    }
    .wpp {
        margin: 0;
        width: 36px;
        height: 36px;
    }
`;