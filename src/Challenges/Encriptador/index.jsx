import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Space } from "antd";
import Logo from "../../Assets/Imagenes/Encriptador/Logo.svg"
import Vector from "../../Assets/Imagenes/Encriptador/Vector.svg"
import { Copiar, Desencriptar, Encriptar } from "./logica";
import "./estilos.css"


const EncriptadorContenedor = styled.section`
    background-color: ${({theme}) => theme.body};
    min-width: 90vw;
    min-height: 90vh;
    padding: 2vh 1vw;    
    display: flex;
    flex-direction: row;
`
const EncriptadorMain = styled.main`
    font-family: "Inter";
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;
    background-color: ${({theme}) => theme.inside};
    height: auto;
    max-width: 95vw;
    margin: 3.3vh ;
    padding: 6vh 6vw;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 425px) {

    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 1200px) {

    }
`
const EncriptadorContenido = styled.div`
    @media screen and (max-width: 425px) {
        min-width: 50vw;
    }
    @media screen and (max-width: 768px) {
        width: 60vw;
    }
    @media (min-width: 1200px) {
        max-width: 95vw;
    }
`
const EncriptadorImg = styled.img`
    width: 5%;

`
const EncriptadorCaja = styled.div`
    background-color: ${({theme}) => theme.body};
    height: 78vh;
    margin-left: 9vw;
    border-radius: 5rem;
    box-shadow: 2vh 2vw 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 400px) {
    }
    @media (min-width: 1200px) {
    }  
`
const EncriptadorVector = styled.img`
`
const EncriptadorH6 = styled.h6`
    color: ${({theme}) => theme.text};
    font-size: 1.5rem;

`
 
const Encriptador = () => {
    return (
        <EncriptadorContenedor>
            <EncriptadorMain>
                <EncriptadorContenido>
                    <EncriptadorImg src={Logo} alt="Alura logo"/>
                    <Input className="text-area" placeholder="Ingrese su texto aqui" cols={30} rows={10} bordered={false} />
                    
                    <Space className="alerta">
                        <EncriptadorVector src={Vector} alt="alerta" />    
                        <EncriptadorH6>Solo letras minusculas y sin acentos</EncriptadorH6>
                    </Space>

                    <Space className="botones" wrap>
                        <Button className="btnEncriptar" type="primary" onClick={Encriptar} >Encriptar</Button>
                        <Button className="btnDesencriptar" onClick={Desencriptar} >Desencriptar</Button>
                    </Space>

                </EncriptadorContenido>
                <EncriptadorContenido>
                            <EncriptadorCaja>

                                <Input className="mensaje" bordered={false} />
                                    <Space wrap>
                                        <Button className="btnCopiar" onClick={Copiar} >Copiar</Button>
                                    </Space>

                            </EncriptadorCaja>

                </EncriptadorContenido>
            </EncriptadorMain>
        </EncriptadorContenedor>
    )
}

export default Encriptador;