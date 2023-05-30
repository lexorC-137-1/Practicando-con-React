import styled from "styled-components";


//Tema
export const Icono = styled.img`
    height: 20px;
    width: 20px;
`
export const IconoTema = styled(Icono)`
    filter: ${({theme}) => theme.filter};
`
export const BtnTema = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: "inherit";
    border: none;
    cursor: pointer;
`