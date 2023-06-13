import styled from "styled-components";
import { Layout, Space, Input, Button } from "antd";

//Imgs
import Control from "../../../../Assets/Imagenes/AluraGeek/control.png"
import Texto from "../../../../Assets/Imagenes/AluraGeek/Texto.png"


const AlgkFooterContenedor = styled(Space)`
    display: flex;
    flex-direction: column;
`
const AlgkFooterLogo = styled(Space)`
    
` 
const AlgkFooterImagen1 = styled.img`
    
`
const AlgkFooterImg2 = styled.img`
    padding: .5rem 0;
`
const AlgkFooterContenedorLista = styled(Space)`
    text-align: center;
`
const AlgkFooterLista = styled.ul`
    
`
const AlgkFooterListaItem = styled.li`
    
`
const AlgkFooterListaLink = styled.a`

`
const AlgkContenedorFormulario = styled(Space)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const AlgkFooterTitulo = styled.h4`
    
`
const AlgkFooterInput1 = styled(Input)`
    
`
const AlgkFooterInput2 = styled(Input)`
    
`
const AlgkFooterboton = styled(Button)`
    
`

export const AlgkFooter = () => {
    return (
        <AlgkFooterContenedor>
            <AlgkFooterLogo>
                <AlgkFooterImagen1 src={Control}/>
                <AlgkFooterImg2 src={Texto}/>
            </AlgkFooterLogo>
            <AlgkFooterContenedorLista>
                <AlgkFooterLista>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Quienes Somos</AlgkFooterListaLink></AlgkFooterListaItem>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Politica de privacidad</AlgkFooterListaLink></AlgkFooterListaItem>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Programa de felicidad</AlgkFooterListaLink></AlgkFooterListaItem>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Nuestras Tiendas</AlgkFooterListaLink></AlgkFooterListaItem>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Quiero ser Franquiciado</AlgkFooterListaLink></AlgkFooterListaItem>
                    <AlgkFooterListaItem><AlgkFooterListaLink>Anuncie aquí</AlgkFooterListaLink></AlgkFooterListaItem>
                </AlgkFooterLista>
            </AlgkFooterContenedorLista>
            <AlgkContenedorFormulario>
                <AlgkFooterTitulo>Hable con nosotros</AlgkFooterTitulo>
                <AlgkFooterInput1 />
                <AlgkFooterInput2 />
                <AlgkFooterboton>Enviar Mensaje</AlgkFooterboton>
            </AlgkContenedorFormulario>
        </AlgkFooterContenedor>
    )
}

export default AlgkFooter;