import { useState } from "react";
import styled from "styled-components";
import { Input, Button, Space } from "antd";
//Img
import Logo from "../../Assets/Imagenes/Encriptador/Logo.svg"
import Vector from "../../Assets/Imagenes/Encriptador/Vector.svg"
import Muñeco from "../../Assets/Imagenes/Encriptador/Muñeco.svg"


const EncriptadorContenedor = styled.section`
    background-color: ${({theme}) => theme.body};
    font-family: "Inter";
    display: flex;
`
const EncriptadorMain = styled.main`
    background-color: ${({theme}) => theme.inside};
    width: 92vw;
    margin: 1rem 0.75rem;
    padding: 1rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 0.25rem 0  rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
        margin: 2rem 1.75rem;
    }
    @media screen and (min-width: 1024px) {
        margin: 3rem 2.5rem;
        flex-direction: row;
        justify-content: space-between;
    }
`
const EncriptadorContenido = styled.div`
   
    @media (min-width: 1024px) {
        min-width: 50%;
        padding: 1rem 1rem 0 1rem;
    }
`
const EncriptadorImg = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 6%;
    padding: 0 0 5rem 0;
    @media screen and (min-width: 768px){
        width: 6%;
        padding: 1rem 0 5rem 1rem;
    }
    @media screen and (min-width: 1024px) {
        width: 10%;
    }
`
const EncriptadorEntrada = styled(Input.TextArea)`
    filter: ${({theme}) => theme.filter};
    font-size: 1.5rem;
    text-transform: lowercase;
    color: #0a3871;
    ::placeholder {
        font-family: "Inter";
        color: #0a3871;        
    }
    @media screen and (min-width: 768px) {
        font-size: 2rem;
        padding-left: 5rem;
    }
    @media screen and (min-width: 1024px) {
        padding-left: 3rem;
    }
`
const EncriptadorAlerta = styled(Space)`
    margin: 5rem 0 1rem 0;
    @media screen and (min-width: 768px) {
    padding-left: 2.8rem;
    }
`
const EncriptadorVector = styled.img`
    width: 55%;
`
const EncriptadorH6 = styled.h6`
    color: ${({theme}) => theme.text};
    font-size: 0.75rem;
`
const EncriptadorBotones = styled(Space)`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    @media (min-width: 1024px) {
        flex-direction: row;
        padding-left: 4rem;
    }
`
const EncriptadorBtnEncriptar = styled(Button)`
    filter: ${({theme}) => theme.filter};
    font-size: 1rem;
    font-weight: 400;
    background-color: #0a3871;
    border: 0.01rem solid #0a3871;
    border-radius: 1rem;
    color: white;
    cursor:pointer;
    min-width: 70vw;
    height: 7vh;
    :hover{

    }
    @media (min-width: 1024px) {
        min-width: 15vw;
    }
`
const EncriptarBtnDesencriptar = styled(Button)`
    filter: ${({theme}) => theme.filter};
    font-size: 1rem;
    background-color: white;
    border: 0.01rem solid #0a3871;
    border-radius: 1rem;
    color: #0a3871;
    cursor:pointer;
    min-width: 70vw; 
    height: 7vh;
    :hover{

    }
    @media (min-width: 1024px) {
        min-width: 15vw;
    }
`
const EncriptadorCaja = styled.div`
    background-color: ${({theme}) => theme.body};
    border-radius: 2rem;
    box-shadow: 1vh 1vw 0.75vh 0 rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const EncriptadorContImg = styled.div`
    
`
const EncriptadorMuñeco = styled.img`
    filter: ${({theme}) => theme.filter};
    display: none;
    @media (min-width: 1024px) {
        display: block;
        margin-top: 3vh;
    }
`
const EncriptadorContP = styled.div`
    background-color: ${({theme}) => theme.inside};
    border-radius: 2rem;
    width: 70vw;
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem 1.5rem;
    margin: 1.5rem 1.5rem ;
    @media screen and (min-width: 1024px) {
        width: 35vw;
    }
    @media screen and (min-width: 1198px) {
        width: 35vw;
        height: 35vh;
    }

`
const EncriptadorTituloMensaje = styled.h2`
    color: ${({theme}) => theme.text};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 0.5rem;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
        margin-bottom: 0.75rem;
    }
`
const EncriptadorParrafo = styled.p`
    color: ${({theme}) => theme.text};
    font-size: .8rem;
    font-weight: 400;
    line-height: 150%;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }
`
const EncriptadorSalida = styled(Input.TextArea)`
    filter: ${({theme}) => theme.filter};
    font-size: 1.5rem;
    color: #0a3871;
    border-radius: 1rem;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
    }
`
const EncriptadorBtnCopiar = styled(Button)`
    font-size: 1rem;
    background-color: white;
    filter: ${({theme}) => theme.filter};
    border: 0.01rem solid #0a3871;
    border-radius: 1rem;
    color: #0a3871;
    cursor: pointer;
    width: 70vw;
    height: 7vh;
    @media (min-width: 1024px) {
        width: 15vw;
        margin-top: 4rem;
        margin-bottom: 2rem;
    }
`
 

const Encriptador = () => {
    const [entrada, setEntrada] = useState("");
    //const [salida, setSalida] = useState("");

    


    
    return (
        <EncriptadorContenedor>
            <EncriptadorMain>

                <EncriptadorContenido>
                    <EncriptadorImg src={Logo} alt="Alura logo"/>
                    <EncriptadorEntrada 
                    id="entrada"
                    placeholder="Ingrese su texto aqui" 
                    rows={5} 
                    bordered={false}
                    value={entrada}
                    onChange={(e) => setEntrada(e.target.value)
                    }
                    />
                    <EncriptadorAlerta>
                        <EncriptadorVector src={Vector} alt="alerta" />    
                        <EncriptadorH6>Solo letras minusculas y sin acentos</EncriptadorH6>
                    </EncriptadorAlerta>
                    <EncriptadorBotones onSubmit={(e) => {
                        e.preventDefault()
                    }} >
                        <EncriptadorBtnEncriptar type="submit" >Encriptar</EncriptadorBtnEncriptar>
                        <EncriptarBtnDesencriptar type="submit" >Desencriptar</EncriptarBtnDesencriptar>
                    </EncriptadorBotones>
                </EncriptadorContenido>
                
                <EncriptadorContenido>
                    <EncriptadorCaja>
                        <EncriptadorContImg>
                            <EncriptadorMuñeco src={Muñeco} alt="muñeco" />
                        </EncriptadorContImg>
                        <EncriptadorContP>
                            <EncriptadorTituloMensaje>Ningun mensaje fue encontrado</EncriptadorTituloMensaje>
                            <EncriptadorParrafo>Ingresa el texto que desees encriptar o desencriptar</EncriptadorParrafo>
                        </EncriptadorContP>
                                
                       {/*<EncriptadorSalida
                        rows={6}
                        bordered={false}
                        value={salida}
                        onChange={(e) => setSalida(e.target.value)}
                        />
                        <Space>
                            <EncriptadorBtnCopiar  >Copiar</EncriptadorBtnCopiar>
                        </Space>*/}

                    </EncriptadorCaja>

                </EncriptadorContenido>

            </EncriptadorMain>
        </EncriptadorContenedor>
    )
}

export default Encriptador;
