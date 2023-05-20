import styled from "styled-components";


//Tema
export const Icono = styled.img`
    height: 25px;
    width: 25px;
`
export const IconoTema = styled(Icono)`
    filter: ${({theme}) => theme.filter};
`
export const BtnTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 4vw;
    background-color: "inherit";
    border: none;
    cursor: pointer;
    @media (max-width: 800px) {
        top: 6vh;
    }
`