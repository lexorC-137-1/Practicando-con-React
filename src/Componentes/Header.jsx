import { Link } from "react-router-dom";

const Header = () => {
    return (<>
        <nav>
            <ul>
                <li><Link to="/">Entrar</Link></li>
                <li><Link to="/encriptador">Encriptador</Link></li>
                <li><Link to="/portafolio">Portafolio</Link></li>
                <li><Link to="/alurageeks">AluraGeeks</Link></li>
                <li><Link to="/aluraflix">Aluraflix</Link></li>
                
            </ul>
        </nav>
    </>)
}

export default Header;