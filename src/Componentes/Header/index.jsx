import { Link } from "react-router-dom";
import styled from "styled-components";

const HeatherSection = styled.section`
    background-color: ${({theme}) => theme.inside};
    padding: 2vw;
    font-weight: 600;
    @media screen and(max-width: 800px) {
        flex-direction: column;
    }
`
const HeatherNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;

`
const HeatherLink = styled.a`
    color: ${({theme}) => theme.text};
`
const Header = () => {
    return (
    <HeatherSection>
        <HeatherNav>
            <HeatherLink><Link to="/">Inicio</Link></HeatherLink>
            <HeatherLink><Link to="/encriptador">Encriptador</Link></HeatherLink>
            <HeatherLink><Link to="/portafolio">Portafolio</Link></HeatherLink>
            <HeatherLink><Link to="/alurageeks">AluraGeeks</Link></HeatherLink>
            <HeatherLink><Link to="/aluraflix">Aluraflix</Link></HeatherLink>
        </HeatherNav>
    </HeatherSection>
    )
}

export default Header;