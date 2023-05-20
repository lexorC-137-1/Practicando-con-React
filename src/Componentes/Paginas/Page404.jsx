import styled from "styled-components";
import "../../Assets/Css/404.css"


const FooterContenedor = styled.div`
    width: 100%;
    height: 100vh;
    background: url(https://github.com/Ahmetaksungur/Vehicle-tracking-with-Opencv/blob/master/plane2.jpg?raw=true);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
const FooterContenido = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: white;
    position: relative;
    z-index: 10;
    user-select: none;
`;
const FooterTitulo = styled.h1`
    position: relative;
    font-size: 177px;
    font-family: Code-Pro-Bold;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: normal;   
`;
const FooterTexto = styled.h3`
    font-family: Code-Pro-Light;
    position: relative;
    margin-bottom: 2rem;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: normal;
    letter-spacing: 0.9px;    
`;
const FooterBtn = styled.a`
    color: black;
    text-decoration: none;
    padding: 15px 25px;
    background: white;
    border-radius: 9999px;
    font-family: Code-Pro;
    position: relative;
    cursor: pointer;
    transition: all 350ms ease-in-out;
    :hoover {
    background: #dadada;
}
`;

const Page404 = () => {
    return (
        <FooterContenedor>
            <FooterContenido>
                <FooterTitulo>404</FooterTitulo>
                <FooterTexto>Pagina No Disponible</FooterTexto>
                <FooterBtn href="/" >Ir a la Pagina Principal</FooterBtn>
            </FooterContenido>
        </FooterContenedor>
    )
}

export default Page404;