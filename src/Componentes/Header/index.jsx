
import { Link } from "react-router-dom";
import styled from "styled-components";


const HeatherContenedor = styled.header`
    background-color: ${({theme}) => theme.inside};
    min-height: 4.75rem;
    padding: 1rem 1rem;
`
const HeaderContenido = styled.div`
    
`
const MenuHeather = styled.nav`
    font-size: 1.5rem;
    font-weight: bold;


`
const MenuHeaderItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 1vw;
    }
`
const MenuHeaderItem = styled(Link)`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.body};
    margin-top: 1rem;
    padding: 0.5rem;
    border: 0.01rem solid #000;
    border-radius: 0.5rem;
`

const Header = () => {
    return (
    <HeatherContenedor>
        <HeaderContenido>
            <MenuHeather>
                <MenuHeaderItems>
                    <MenuHeaderItem to="/">Inicio</MenuHeaderItem>
                    <MenuHeaderItem to="/encriptador">Encriptador</MenuHeaderItem>
                    <MenuHeaderItem to="/portafolio">Portafolio</MenuHeaderItem>
                    <MenuHeaderItem to="/alurageeks">AluraGeeks</MenuHeaderItem>
                    <MenuHeaderItem to="/aluraflix">Aluraflix</MenuHeaderItem>
                </MenuHeaderItems>
            </MenuHeather>
        </HeaderContenido>
    </HeatherContenedor>
    )
}

export default Header;

/*
const HeadeContainer = styled.header`
    border-radius: 0 0 10px 10px;
    box-shadow: var(--shadow);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    height: 4.75rem;
    @media (min-width: 900px) {
        height: 6.75rem;
    }

`

const MenuHamburguer = styled.div`
    grid-area: logo;
    width: 1.5rem;
    height: 0.75rem;
    transition: 0.2s;
`

const MenuHamburguerIcon = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(../../img/menu.svg);
    background-size: contain;
`
const HeaderContenido = styled.div`

`
const HeaderLogo = styled.img`
    width: 3rem;
`
const HeaderTitulo = styled.h1`
    font-family: var(--font-family-logo);
    font-size: var(--font-logo);
    margin-left: 0.5rem;
`
const MenuHeader = styled.nav`
    position: fixed;
    left: -100vw;
    top: 0;
    background-color: var(--contrast-light-color);
    width: 70vw;
    height: 100vh;
    box-sizing: border-box;
    font-size: var(--font-size-menu-header-item);
    font-weight: var(--font-menu-header-item);
    z-index: 10;
    transition: 0.25s;
    @media (min-width: 900px) {
    justify-self: flex-start;
    position: static;
    width: fit-content;
    height: fit-content;
    grid-area: menu;    
    }
`
const MenuHeaderItems = styled.ul`
    @media (min-width: 900px) {
    display: flex;
    align-items: center;    }
`
const MenuHeaderItem = styled(Link)`
    display: block;
    padding-top: 1.5rem;
    padding-left: 1rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--cor-divisao);
    @media (min-width: 900px) {
    border: none;
    padding: 0;
    margin-right: 1rem;    }
`

const Header = () => {
    return (
        <header className="header container">
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to="/" className="flex flex--center">
                    <img className="header__logo" src={image} alt="" />
                    <h1 className="header__title">Petshop</h1>
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                    <li><Link className="menu-item" to="#">Productos</Link></li>
                    <li><Link className="menu-item" to="#">Blog</Link></li>
                    <li><Link className="menu-item" to="/sobre">Sobre</Link></li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}
*/