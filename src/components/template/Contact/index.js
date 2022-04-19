import react from 'react'
import letter from './assets/letter.png'
import tel from './assets/telephone.png'
import pin from './assets/location.png'
import logo from './assets/logo.png'
import pattern from './assets/pattern.png'
import {
    Container,
    Elements,
    Motto,
    Form,
    Info,
    Logo,
    Pattern,
    Heading,
    Description,
    TextWrapper,
    Button,
    Img,
    TextInput,
    TextArea,
    Item,
    Icon,
    List,
    Label,
    Stores
} from './styles'
import Alert from '@mui/material/Alert';

const Contact = () => {
    function sent() {
        alert('O SUA MENSAGEM FOI ENVIADA!');
    }

    return(
        <Container>
           <Elements>
                <Info>
                    <Logo
                        src={logo}
                        alt='Logo da Palanca Store'
                    />
                    <Motto>Visite as nossas lojas, estamos sempre<br/> abertos a receber-te.</Motto>



                        <Label>INFORMAÇÕES</Label>
                        <Pattern
                        src={pattern}
                        alt='Padrões da Palanca Store'
                    />
                            <Item><Icon src={letter} className='letter'/>geral@palanca.ao</Item>
                            <Item><Icon src={tel}/>930 343 312</Item>

                        <Label>AS NOSSAS LOJAS</Label>
                        <Pattern
                            src={pattern}
                            alt='Padrões da Palanca Store'
                        />

                        <Stores>
                            <Item><Icon src={pin}/>Benfica - Rua do Partido, Benfica.</Item>
                            <Item><Icon src={pin}/>Kifica - Rua do BFA, Benfica.</Item>
                            <Item><Icon src={pin}/>Camama - Estrada principal, Camama.</Item>
                            <Item><Icon src={pin}/>Prenda - Avenida Revolução de Outubro, Prenda.</Item>
                            <Item><Icon src={pin}/>Huambo - Rua Dr. Lacerda, Huambo.</Item>
                        </Stores>
                </Info>

                <Form action='https://formsubmit.co/contacto@palanca.ao' method='POST'>
                    <Heading>DEIXE UMA MENSAGEM</Heading>
                    <Description>Nome *</Description>
                    <TextInput name='name' required/>
                    <Description>E-mail *</Description>
                    <TextInput name='email' required/>
                    <Description>Assunto *</Description>
                    <TextArea name='message' required/>

                    <Button type='submit' onClick={sent}>Enviar Mensagem</Button>
                    <TextInput type='hidden' name='_captcha' value='false'/>
                    <TextInput type='hidden' name='_next' value='#'/>
                </Form>
            </Elements>
        </Container>
    )
}

export default Contact;