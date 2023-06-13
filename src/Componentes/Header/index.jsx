import styled from "styled-components";
import { Link } from "react-router-dom";


const HeatherContenedor = styled.header`
    background-color: ${({theme}) => theme.inside};
    min-height: 3rem;
    padding: 1rem 1rem;
    @media screen and (min-width: 768px) {
        min-height: 4.75rem;
    }
`
const HeaderContenido = styled.div`

`
const MenuHeather = styled.nav`
    font-size: .55rem;
    font-weight: bold;
    @media screen and (min-width: 375px){
    font-size: .60rem;
    }
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`
const MenuHeaderItems = styled.ul`
    display: flex;
    gap: 1.5vw;
    align-items: center;
`
const MenuHeaderItem = styled(Link)`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.body};
    border: 0.001rem solid #000;
    border-radius: 0.5rem;
    padding: 0.25rem;

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