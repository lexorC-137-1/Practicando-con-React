import styled from "styled-components";
import { Button } from "antd";

//Imgs
import Hongo from "../../../../Assets/Imagenes/AluraGeek/Hero 1.png"


const AlgkTituloContenedor = styled.div`
    background-image: url(${Hongo});
    background-repeat: no-repeat;
    background-size: cover;
`
const AlgkTituloImg = styled.img`
    width: 100%;
    border-radius: 1vw;
`
const AlgkTitulo = styled.h2`
    
`
const AlgkTituloParrafo = styled.h4`
    
`
const AlgkTituloBoton = styled(Button)`
    margin-top: 1vh;
`

const onSearch = (value) => console.log(value);
const AlgkTodo = () => {
    return (
    <AlgkTodoContenedor>
        <AlgkTodoMain>
            <AlgkTituloContenedor>
                <AlgkTituloImg src={Hongo}></AlgkTituloImg>
                <AlgkTitulo>Febrero Promocional</AlgkTitulo>
                <AlgkTituloParrafo>Productos seleccionados con 33% de descuento</AlgkTituloParrafo>
                <AlgkTituloBoton type="primary">Ver Consolas</AlgkTituloBoton>
            </AlgkTituloContenedor>
            
        </AlgkTodoMain>
    </AlgkTodoContenedor>
    )
}

export default AlgkTodo;