import React from "react";
import styled from "styled-components";


const FooterSection = styled.section`
    background-color: ${({theme}) => theme.inside};
    color: ${({theme}) => theme.text};
    padding: 2rem;
    text-align: center;
`
const FooterDiv = styled.div`


`
const FooterParrafo = styled.p`
    
`

const Foorter = () => {
    return (
        <FooterSection >
            <FooterDiv >
                <FooterParrafo>Desarrollado por Lex Oria</FooterParrafo>
                <FooterParrafo>2023</FooterParrafo>
            </FooterDiv>
        </FooterSection>
    )
}

export default Foorter;