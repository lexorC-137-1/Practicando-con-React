import styled from "styled-components";
import { Input, Button, Space } from "antd";
import Logo from "../../Assets/Imagenes/Encriptador/Logo.svg"
import Vector from "../../Assets/Imagenes/Encriptador/Vector.svg"
import { Copiar, Desencriptar, Encriptar } from "./logica";


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
const EncriptadorEntrada = styled(Input)`
    font-size: 2.5rem;
    color: #0a3871;
    margin: 7vh 0 33vh 10vw;
    text-transform: lowercase;
    ::placeholder {
        color: #0a3871;        
    }
`
const EncriptadorAlerta = styled(Space)`
    margin-left: 5vw;

`
const EncriptadorVector = styled.img`
    padding: 0.35vh;
`
const EncriptadorH6 = styled.h6`
    color: ${({theme}) => theme.text};
    font-size: 1.5rem;
`
const EncriptadorBotones = styled(Space)`
    display: flex;
    margin-top: 3vh;
    @media (max-width: 800px){
        flex-direction: columm;
    }
`
const EncriptadorBtnEncriptar = styled(Button)`
    font-size: 2rem;
    background-color: #0a3871;
    border: 1px solid #0a3871;
    border-radius: 2rem;
    color: white;
    cursor:pointer;
    height: 8vh;
    width: 15vw;
    margin-left: 5vw;
`
const EncriptarBtnDesencriptar = styled(Button)`
    font-size: 2rem;
    background-color: white;
    border: 1px solid #0a3871;
    border-radius: 2rem;
    color: #0a3871;
    cursor:pointer;
    height: 8vh;
    width: 15vw;
    margin-left: 5vw;
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
const EncriptadorSalida = styled(Input)`
    font-size: 2.5rem;
    background-image: url("../../Assets/Imagenes/Encriptador/Muñeco.svg");
    background-repeat: no-repeat;
    border-radius: 2rem;
    color: #0a3871; 
    height: 40vh;
    margin-left: 13vw;
`
const EncriptadorBtnCopiar = styled(Button)`
    font-size: 2rem;
    background-color: white;
    border: 1px solid #0a3871;
    border-radius: 2rem;
    color: #0a3871;
    cursor: pointer;
    height: 8vh;
    width: 15vw;
`
 
const Encriptador = () => {
    return (
        <EncriptadorContenedor>
            <EncriptadorMain>

                <EncriptadorContenido>
                    <EncriptadorImg src={Logo} alt="Alura logo"/>
                    <EncriptadorEntrada placeholder="Ingrese su texto aqui" cols={30} rows={10} bordered={false} />
                    <EncriptadorAlerta>
                        <EncriptadorVector src={Vector} alt="alerta" />    
                        <EncriptadorH6>Solo letras minusculas y sin acentos</EncriptadorH6>
                    </EncriptadorAlerta>
                    <EncriptadorBotones wrap>
                        <EncriptadorBtnEncriptar type="primary" onClick={Encriptar} >Encriptar</EncriptadorBtnEncriptar>
                        <EncriptarBtnDesencriptar onClick={Desencriptar} >Desencriptar</EncriptarBtnDesencriptar>
                    </EncriptadorBotones>
                </EncriptadorContenido>
                
                <EncriptadorContenido>
                            <EncriptadorCaja>

                                <EncriptadorSalida bordered={false} />
                                    <Space wrap>
                                        <EncriptadorBtnCopiar onClick={Copiar} >Copiar</EncriptadorBtnCopiar>
                                    </Space>

                            </EncriptadorCaja>

                </EncriptadorContenido>

            </EncriptadorMain>
        </EncriptadorContenedor>
    )
}

export default Encriptador;