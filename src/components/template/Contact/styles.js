import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #FAFAFA;
    padding: 4rem 0;
    display: flex;
    justify-content: center;

    @media(max-width: 550px){
        padding: 4rem 0 0 0;
    }

    /* border: 2px solid red; */
`;

export const Elements = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 1300px;

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

    /* border: 2px solid purple; */
`;

export const Info= styled.div`
    display: flex;
    flex-direction: column;
    
    //column
    @media(max-width: 1030px){
        align-items: center;
        margin-top: 0;
    }
`;

export const Stores = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    /* background-color: red; */

    @media(max-width: 500px){
        margin: 0 2rem;
    }
`;

export const Logo = styled.img`
    width: 200px;
    height: 47px;
    margin-bottom: 1rem;

    @media(max-width: 500px){
        width: 180px;
        height: 40px;
    }
`;

export const Pattern = styled.img`
    width: 187.96px;
    height: 13px;
    margin-bottom: 1rem;

    @media(max-width: 500px){
        width: 187.96px;
        height: 13px;
    }
`;

export const Form = styled.form`
    /* height: 700px; */
    width: 100%;
    max-width: 500px;
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;

    @media(max-width: 550px){
        width: 100%;
        /* height: 480px; */
    } 
`;


export const Button = styled.button`
    color: #F2F2F2;
    font-size: 1rem;
    width: 80%;
    height: 62px;
    font-weight: 500;
    margin-top: 2rem;
    background-color: #555;
    border: 2px solid #F2F2F2;

    &:hover{
        transition: 0.5s;
        color: #FAFAFA;
        cursor: pointer;
        border: 2px solid #2A3D7D;
        background-color: #2A3D7D;
    }
`;

export const Heading = styled.h1`
    width: 80%;
    color: #555;
    font-size: 1.7rem;
    font-weight: bold;

    @media(max-width: 768px){
        font-size: 1.5rem;
    }

    /* border: 2px solid red; */
`;
export const Label = styled.h1`
    color: #1C1C1E;
    font-size: 1.7rem;
    line-height: 42px;
    font-weight: bold;
    margin-bottom: 0.75rem;
    padding-top: 30px; 
    font-size: 1.7rem;
    line-height: 42px;
    font-weight: bold;
    margin-bottom: 0.75rem;
    padding-top: 30px;
`;

export const Description = styled.p`
    color: #555555;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    text-justify: inter-word;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;

    //column
    @media(max-width: 500px){
        font-size: 1.25rem;
    }

    width: 80%;
`;
export const Motto = styled.div`
    color: #555555;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5rem;
    max-width: 450px;
    text-align: justify;
    text-justify: inter-word;
    margin: 0;
    
    @media(max-width: 768px){
        text-align: center;
    }  
`;

export const TextWrapper = styled.div``;

export const TextInput = styled.input`
    width: 80%;
    height: 62px;
    background-color: transparent;
    border: 2px solid #777777;
    font-weight: 500;
    color: #777777;
    font-size: 1.15rem;
    padding: 20px;
    
    &:focus { outline: none; }
 
`

export const TextArea = styled.textarea`
    width: 80%;
    height: 150px;
    background-color: transparent;
    border: 2px solid #777777;
    font-weight: 500;
    color: #777777;
    font-size: 1.15rem;
    padding: 20px;
    resize: none;

    &:focus { outline: none; }
`

export const Item = styled.li`
    display: flex;
    color: #555;
    font-size: 1em;
    font-weight: 500;
    list-style: none;
    margin: .5em;
    .letter{
        height: 15px;
        width: 18px;
    }
`
export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 1em;
`;

//NOTA: VOU PRECISAR DESSE CÓDIGO!
/*<Alert severity="success" color="success">
E-mail enviado com sucesso!
</Alert>*/

