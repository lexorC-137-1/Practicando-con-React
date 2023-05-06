import styled from "styled-components";


export const StyledContainer = styled.div`
    background-color: ${({theme}) => theme.body};
    min-height: 90vh;
    padding: 0px 15vw;
`

 export const StyledContent = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({theme}) => theme.inside};
    color: ${({theme}) => theme.text};
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.4);
    padding: 20px;
    width: 20vh;
    @media (max-width: 800px) {
        width: 95%;
        margin: 5px;
    }
`
export const Icono = styled.img`
    height: 25px;
    width: 25px;
`

export const BtnTema = styled.div`
    position: absolute;
    top: 4vh;
    right: 20px;
    background-color: inherit;
    border: none;
    cursor: pointer;
`