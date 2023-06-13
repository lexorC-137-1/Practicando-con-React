import styled from "styled-components";
import { Space, Button, Tooltip, Input } from "antd";
import { SearchOutlined } from"@ant-design/icons"


//Imgs
import Control from "../../../../Assets/Imagenes/AluraGeek/control.png";
import Texto from "../../../../Assets/Imagenes/AluraGeek/Texto.png"


const { Search } = Input;

const AlgkHeaderContenedor = styled(Space)`
    display: flex;
    justify-content: space-around;
`
const AlgkHeaderLogo = styled(Space)`
    
` 
const AlgkHeaderImagen1 = styled.img`
    
`
const AlgkHeaderImg2 = styled.img`
    padding: .5rem 0;
`
const AlgkHeaderBtn = styled(Button)`

`
const AlgkHeaderContenedorBuscar = styled(Space)`
    margin-bottom: 2vh;
`
const AlgkHeaderBuscar = styled(Tooltip)`
    
`
const AlgkHeaderBuscarBtn = styled(Button)`
    
`
const AlgkHeaderBuscarInput = styled(Search)`
    display: none;
`

export const AlgkHeader = () => {
    return (
        <AlgkHeaderContenedor>
            <AlgkHeaderLogo>
                <AlgkHeaderImagen1 src={Control}/>
                <AlgkHeaderImg2 src={Texto}/>
            </AlgkHeaderLogo>
            <AlgkHeaderBtn >Login</AlgkHeaderBtn>
            <AlgkHeaderContenedorBuscar>
                <AlgkHeaderBuscar title="buscar">
                    <AlgkHeaderBuscarBtn type="primary" shape="circle" icon={<SearchOutlined />} />
                    <AlgkHeaderBuscarInput
                    placeholder="Buscar producto"
                    allowClear
                    enterButton="Buscar"
                    size="large"
                    onSearch={""}
                    />
                </AlgkHeaderBuscar>
            </AlgkHeaderContenedorBuscar>
        </AlgkHeaderContenedor>
    )
}

export default AlgkHeader;