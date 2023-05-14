import styled from "styled-components";


export const StyledContenedor = styled.div`
    background-color: ${({theme}) => theme.body};
    min-width: 90vw;
    min-height: 90vh;
    padding: 2vh 1vw;    
    display: flex;
    flex-direction: row;
    @media (max-width: 800px) {
        flex-direction: column;
}
`

 export const StyledContenido = styled.section`

    @media (max-width: 800px) {

    }
`

export const Caja = styled.div`

`

export const Icono = styled.img`
    height: 25px;
    width: 25px;
`

export const BtnTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 4vw;
    background-color: inherit;
    border: none;
    cursor: pointer;
    @media (max-width: 800px) {
        top: 6vh;
    }
`