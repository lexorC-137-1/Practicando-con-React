import styled from "styled-components";
import { Layout, Space } from "antd";
import { AlgkHeader } from "./Componentes/Header";
import { AlgkTodo} from "./Componentes/Paginas/todo"
import AlgkFooter from "./Componentes/Footer";


export const AlgkContenedor = styled(Space)`
    background-color: ${({theme}) => theme.body};
    font-family: "Raleway";
    display: flex;
`
export const AlgkMain = styled(Layout)`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.inside};
    width: 92vw;
    margin: 1rem 0.75rem;
    padding: 1rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 0.25rem 0  rgba(0, 0, 0, 0.4);
`

const AluraGeeks = () => {
    return ( 
        <AlgkContenedor>
            <AlgkMain>
                <AlgkHeader />
                <AlgkTodo />
                <AlgkFooter />
            </AlgkMain>
        </AlgkContenedor>
    )
}

export default AluraGeeks;