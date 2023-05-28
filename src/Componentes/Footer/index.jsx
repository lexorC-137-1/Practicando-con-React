import styled from "styled-components";
//Img
import Facebook from "../../Assets/Imagenes/Footer/facebook.png"
import Instagram from "../../Assets/Imagenes/Footer/instagram.png"
import Twiter from "../../Assets/Imagenes/Footer/twitter.png"

const Contenedor = styled.footer`
    background-color: ${({theme}) => theme.inside};
    height: 4.75rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
`
const Redes = styled.div`
    background-color: ${({theme}) => theme.body};
    border-radius: 2rem;
    padding: 0.15rem;
`
const RedesEnlace = styled.a`
    
`
const RedesImg = styled.img`
    filter: ${({theme}) => theme.filter};
    padding: 1vh 1vw;
`
const FooterImg = styled.img`
    
`
const FooterDesarrollador = styled.strong`
    color: ${({theme}) => theme.text};
    font-size: 1rem;
    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
`

const Foorter = () => {
    return (
        <Contenedor>
            <Redes>
                <RedesEnlace href="https://www.aluracursos.com/"><RedesImg src={Facebook} /></RedesEnlace>
                <RedesEnlace href="https://www.aluracursos.com/"><RedesImg src={Instagram} /></RedesEnlace>
                <RedesEnlace href="https://www.aluracursos.com/"><RedesImg src={Twiter} /></RedesEnlace>
            </Redes>
            <FooterImg />
            <FooterDesarrollador>Desarrollado por Lexor</FooterDesarrollador>
        </Contenedor>
    )
}

export default Foorter;



