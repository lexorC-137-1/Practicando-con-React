import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorPrimario } from "../UI/variables";

const StyledHeader = styled.nav`
    background-color: ${colorPrimario};
    display: flex;
    justify-content: space-around;
    padding: 2vw;
    align-items: center;
`

const Header = () => {
    return (
    <StyledHeader>
        
        <Link to="/">Home</Link>
        <Link to="/encriptador">Encriptador</Link>
        <Link to="/portafolio">Portafolio</Link>
        <Link to="/alurageeks">AluraGeeks</Link>
        <Link to="/aluraflix">Aluraflix</Link>
        
    </StyledHeader>)
}

export default Header;