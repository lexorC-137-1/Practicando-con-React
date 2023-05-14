import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Space } from "antd";
import {  StyledContenedor } from "../../Componentes/UI";
import Logo from "../../Assets/Imagenes/Encriptador/Logo.svg"
import Vector from "../../Assets/Imagenes/Encriptador/Vector.svg"
import "./estilos.css"
import { Copiar, Desencriptar, Encriptar } from "./logica";



const EncriptadorImg = styled.img`
    padding-top: 1vh;
    margin-left: 0.5vw;

`

const EncriptadorMain = styled.main`
    background-color: #f3f5fc;
    height: 90vh;
    margin: 3.3vh;
    padding: 6vh;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    @media (min-width: 300px){
        min-width: 50vw;
    }
    @media (width: 800) {
        width: 60vw;
        flex-direction: row;
    }
    @media (min-width: 1200px) {
        max-width: 95vw;
    }
`

const EncriptadorSection = styled.section`
    font-family: "Inter";
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%; 
`

const EncriptadorDiv = styled.div`
    background-color: ${({theme}) => theme.inside};
    color: ${({theme}) => theme.text};
    width: 20vw;
    height: 78vh;
    padding: 5vh 2vw;
    border-radius: 5rem;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    @media (min-width: 400px) {
       min-height: 60vh;
       min-width: 25;
    }
    @media (min-width: 1200px) {
        max-height: 78vh;
        width: 35vw;
    }  
`

const EncriptadorVector = styled.img`
    padding-bottom: 0.4vh;
`

const EncriptadorH6 = styled.h6`
    color: #495057;
    font-size: 1.5rem;

`



 
const Encriptador = () => {
    return (
        <StyledContenedor>
            <EncriptadorMain>
                <EncriptadorSection>
                    <EncriptadorVector src={Logo} alt="Alura logo"/>
                    <Input className="text-area" placeholder="Ingrese su texto aqui" cols={30} rows={10} bordered={false} />
                    
                    <Space className="alerta">
                        <EncriptadorVector src={Vector} alt="alerta" />    
                        <EncriptadorH6>Solo letras minusculas y sin acentos</EncriptadorH6>
                    </Space>

                    <Space className="botones" wrap>
                        <Button className="btnEncriptar" type="primary" onClick={Encriptar} >Encriptar</Button>
                        <Button className="btnDesencriptar" onClick={Desencriptar} >Desencriptar</Button>
                    </Space>

                </EncriptadorSection>
                    <EncriptadorSection>
                            <EncriptadorDiv>

                                <Input className="mensaje" bordered={false} />
                                    <Space wrap>
                                        <Button className="btnCopiar" onClick={Copiar} >Copiar</Button>
                                    </Space>

                            </EncriptadorDiv>

                    </EncriptadorSection>
            </EncriptadorMain>
        </StyledContenedor>
    )
}

export default Encriptador;