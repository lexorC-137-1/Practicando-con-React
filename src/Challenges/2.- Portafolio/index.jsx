import styled from "styled-components";
import { Button } from "@mui/material";
import FormularioPortafolio from "./Componentes/formulario";

//Imgs
import Vector from "../../Assets/Imagenes/Portafolio/vector.png"
import Perfil from "../../Assets/Imagenes/Portafolio/profile.png"
import Flecha from "../../Assets/Imagenes/Portafolio/arrow.png"
import Firma from "../../Assets/Imagenes/Portafolio/signature.png"
import Html from "../../Assets/Imagenes/Portafolio/htlm.png"
import Java from "../../Assets/Imagenes/Portafolio/js_icon.png"
import Php from "../../Assets/Imagenes/Portafolio/php_icon.png"
import Node from "../../Assets/Imagenes/Portafolio/nodejs_icon.png"
import Reactjs from "../../Assets/Imagenes/Portafolio/react_icon.png"
import Css from "../../Assets/Imagenes/Portafolio/css_icon.png"
import Skate from "../../Assets/Imagenes/Portafolio/skate_icon.png"
import Guitarra from "../../Assets/Imagenes/Portafolio/guitar_icon.png"
import Musica from "../../Assets/Imagenes/Portafolio/headphones_icon.png"
import Tv from "../../Assets/Imagenes/Portafolio/tv_icon.png"
import Cocina from "../../Assets/Imagenes/Portafolio/forkspoon_icon.png"
import Foto from "../../Assets/Imagenes/Portafolio/camera_icon.png"
import Univ1 from "../../Assets/Imagenes/Portafolio/ufpr_logo.png"
import Univ2 from "../../Assets/Imagenes/Portafolio/alura_logo.png"
import Univ3 from "../../Assets/Imagenes/Portafolio/ufrj_logo.png"
import Xp1 from "../../Assets/Imagenes/Portafolio/decod_print.png"
import Xp2 from "../../Assets/Imagenes/Portafolio/forca_print.png"
import Xp3 from "../../Assets/Imagenes/Portafolio/secretcode_print.png"
import Xp4 from "../../Assets/Imagenes/Portafolio/forca2_print.png"
import Contacto from "../../Assets/Imagenes/Portafolio/contact_image.png"

const  manejarCambio = (valores) => {
    console.log("Portafolio: ", valores)
}

const PrtfContenedor = styled.section`
    background-color: ${({theme}) => theme.body};
    font-family: "Raleway";
    display: flex;
`
const PrtfMain = styled.main`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.inside};
    width: 95vw;
    margin: 2vh 2vw;
    padding: 2vh 2vw;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 0.25rem 0  rgba(0, 0, 0, 0.4);
`
const PrtfMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
`
const PrtfHeader = styled.header`
    display: flex;
`
const PrtfHeaderImg = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 10%;
    margin-right: 0.25rem;
    @media screen and (min-width: 768px) {
        width: 15%;
    }
`
const PrtfNombre = styled.h3`
    font-size: 0.85rem;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`
const PrtfNavegador = styled.nav`
    font-size: 0.65rem;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
    }
`
const PrtfUl = styled.ul`
    @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    }
`
const PrtfLista = styled.li`
    display: none;
    @media screen and (min-width: 1024px) {
        display: block;
    }  
`
const PrtfListaContacto = styled.li`
    @media screen and (min-width: 768px) { 
        font-weight: bold;    
    }
    @media screen and (min-width: 1024px) { 
        display: none;
    }
`
const PrtfListaItem = styled.a`
    color: ${({theme}) => theme.text};
    :hover{
    text-decoration: underline;
}
`
const PrtfTitulo = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
`
const PrtfTituloContenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    @media screen and (min-width: 784px) {
    flex-direction: row-reverse;
    align-items: center;
    }
`
const PrtfTituloImg = styled.img`
    width: 8rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) { 
        width: 12rem;
    }
    @media screen and (min-width: 1024px) {
        width: 18rem;
    }
`
const PrtfTituloBox = styled.div`
    width: 80vw;
`
const PrtfTituloBio = styled.h2`
    font-size: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }   
`
const PrtfTituloBio2 = styled.h3`
    font-size: 1.3rem;
    font-weight: lighter;
    margin-right: 1.5vw;
    @media screen and (max-width: 768px) { 
        font-size: 1rem;
    }
`
const PrtfTituloNav = styled.ul`
    display: flex;
    gap: .5rem;
    margin-top: 1.5vh;
`
const PrtfTituloLista = styled.li`
    
`
const PrtfTituloA = styled.a`
    color: ${({theme}) => theme.text};
    font-size: .6rem;

    :hover{
        text-decoration: underline;
    }
    @media screen and (min-width: 768px) { 
        font-size: 1rem;
    }
`
const PrtfTituloVector = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 15%;
    @media screen and (min-width: 768px) { 
        width: 10%;
    }
`
const PrtfSobre = styled.section`
    padding: 2rem;
`
const PrtfSobreContenedor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;  
    @media screen and (min-width: 768px) { 
        width: 70%;
    }
`
const PrtfSobreTitulo = styled.h3`
    font-size: 1.5rem;
    @media screen and (min-width: 768px) { 
        font-size: 2rem;
    }
`
const PrtfSobreParrafo = styled.p`
    font-size: 1rem;
    @media screen and (min-width: 768px) { 
        font-size: 1.5rem;
    }
`
const PrtfSobreImg = styled.img`
    width: 10rem;
    margin-top: 1rem;
`
const PrtfHabilidades = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: column;
`
const PrtfHabilidadesTitulo = styled.h3`
    font-size: 2rem;
    align-self: center;
    margin: 2vh 0;
`
const PrtfHabilidadesDiv = styled.div`
    height: 55vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    @media screen and (min-width: 768px) {
        height: 35vh;
    }
    @media screen and (min-width: 1024px) {
        height: 20vh;
        flex-direction: row;
    }
`
const PrtfHabilidadesBox = styled.div`
    background-color: ${({theme}) => theme.inside};
    border-radius: .5rem;
    width: 100px;
    height: 80px;
    margin: 1vh 1vw;
    @media screen and (min-width: 768px) {
        width: 130px;
        height: 100px;
    }
    @media screen and (min-width: 1024px) {
        height: 120px;
    }
`
const PrtfHabilidadesLista = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 5vh;
`
const PrtfHabilidadesListaImg = styled.li`
    padding-left: 1.5vw;
`
const PrtfHabilidadesImagen = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 15%;
`
const PrtfHabilidadesImagen2 = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 25%;
`
const PrtfHabilidadesNombre = styled.li`
   font-weight: bold;
   padding-left: 1vw;
   @media screen and (min-width: 1024px) { 
        font-size: 1.5rem;
    }
`
const PrtfPasatiempo = styled.section`
    padding: 2vh 2vw;
    display: flex;
    flex-direction: column;
`
const PrtfPasatiempoTitulo = styled.h3`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    align-self: center;
`
const PrtfPasatiempoLinea = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 1rem;
    @media screen and (min-width: 768px) {
        height: 50vh;
    }
    @media screen and (min-width: 1024px) {
        height: 25vh;
        flex-direction: row;
    }
`
const PrtfPasatiempoCaja = styled.div`
    background-color: ${({theme}) => theme.body};
    border-radius: 1rem;
    width: 25vw;
    height: 20vh;
    display: flex;
    align-self: center;
    justify-content: center;
    @media screen and (min-width: 768px) {
        width: 20vw;
    }
    @media screen and (min-width: 1024px) {
        width: 13vw;
        height: 18vh;
    }
`
const PrtfPasatiempoLista = styled.ul`

`
const PrtfPasatiempoListaImagen = styled.li`
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) { 
        padding-top: 3vh;
    }
`
const PrtfPasatiempoImg = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 40%;
    padding-top: 1rem;
    @media screen and (min-width: 768px) { 
        width: 50%;
    }
`
const PrtfPasatiempoListaNombre = styled.li`
    font-size: 1rem;
    font-weight: bold;
`
const PrtfPasatiempoNombre = styled.p`
    padding-left: .5rem;
    margin-top: .5rem;
        @media screen and (min-width: 1024px) { 
        font-size: 1.5rem;
    }
`
const PrtfEstudios = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
    padding: 2vh;
    text-align: center;
`
const PrtfEstudiosTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PrtfEstudiosCursos = styled.div`
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
   }   
`
const PrtfEstudiosCaja = styled.div`
    width: 100%;
    margin-top: 1vh;
    @media screen and (min-width: 768px) {
    width: 30%;
    }
`
const PrtfEstudiosCajaUl = styled.ul`
    
`
const PrtfEstudiosCajaLista = styled.li`
    
`
const PrtfEstudiosImg = styled.img`
    background-color: ${({theme}) => theme.inside};
    border-radius: 1rem;
    padding: 2rem;
    width: 100%;
    position: relative;
    :link {
    width: 90%;
    margin: auto;
    display: block;
    }
`
const PrtfEstudiosTexto = styled.h3`

`
const PrtfEstudiosParrafo = styled.p`

`
const PrtfExperiencia = styled.section`
    margin: 2vh 1.5vw;
`
const PrtfExperienciaTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
`
const PrtfExperienciaCaja = styled.div`
    margin: 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media screen and (min-width: 1024px) { 
        flex-direction: row;
        :nth-child(3),:nth-child(5){
            flex-direction: row-reverse;
        }
    }
`
const PrtfExperienciaImg = styled.img`
    width: 100%;
    @media screen and (min-width: 1024px) { 
        width: 60%;
    }
`
const PrtfExperienciaContenedor = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1vh 1vw;
`
const PrtfExperienciaContenedorTitulo = styled.h2`
    font-size: 1.25rem;
`
const PrtfExperienciaContenedorTexto = styled.h3`
    font-weight: normal;
    font-size: .75rem;
`
const PrtfExperienciaContenedorBtn= styled.div`
margin-top: 1vh;
display: flex;
`
const PrtfExperienciaSpan = styled.span`

`
const PrtfExperienciaDescripcion = styled.a`
    margin-right: 2vw;
`
const PrtfExperienciaBtn1 = styled(Button)`
    filter: ${({theme}) => theme.filter};
    width: 7.5rem;
`
const PrtfExperienciaBtn2 = styled(Button)`
    filter: ${({theme}) => theme.filter};
    width: 7.5rem;
`
const PrtfContacto = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
    padding: 1.5rem;
    margin-top: 2rem;
`
const PrtfContactoContenedor = styled.div`
    display: flex;
    gap: 1rem;
`
const PrtfContactoCajaIzquierda = styled.div`
        display: none;
    @media screen and (min-width: 1024px) { 
        display: block;
        width: 70%;
    }
`
const PrtfContactoImg = styled.img`
        border-radius: 1rem;
`
const PrtfContactoCajaDerecha = styled.div`
    display: flex;
    flex-direction: column;
`
const PrtfContactoTitulo = styled.h2`
    font-size: 1.75rem;
    margin-bottom: 2vh;
`
const PrtfContactoTexto = styled.h3`
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 3vh;
`


const Portafolio = () => {

    return (         
        <PrtfContenedor>
            <PrtfMain>

                <PrtfMenu>
                    <PrtfHeader>
                        <PrtfHeaderImg src={Vector} alt="Estrella" />
                        <PrtfNombre>Alexander Oria</PrtfNombre>
                    </PrtfHeader>
                    <PrtfNavegador>
                        <PrtfUl>
                            <PrtfLista><PrtfListaItem href="#sobre-mi"> Sobre mi </PrtfListaItem></PrtfLista>
                            <PrtfLista><PrtfListaItem href="#skills"> Skills </PrtfListaItem></PrtfLista>
                            <PrtfLista><PrtfListaItem href="#hobbies" >Hobbies </PrtfListaItem></PrtfLista>
                            <PrtfLista><PrtfListaItem href="#formacion"> Formación </PrtfListaItem></PrtfLista>
                            <PrtfLista><PrtfListaItem href="#xp"> Proyectos </PrtfListaItem></PrtfLista>
                            <PrtfLista><PrtfListaItem href="#contacto"> Contacto@fulana.com </PrtfListaItem></PrtfLista>
                            <PrtfListaContacto><PrtfListaItem href="#contacto"> contacto@fulana.com </PrtfListaItem></PrtfListaContacto>
                        </PrtfUl>            
                    </PrtfNavegador>
                </PrtfMenu>

                <PrtfTitulo>
                    <PrtfTituloContenido>
                        <PrtfTituloImg src={Perfil} />
                        <PrtfTituloBox>
                            <PrtfTituloBio>Hola, mi nombre es Alexander Oria y construyo paginas web </PrtfTituloBio>
                            <PrtfTituloBio2>Soy formado en .... lorem ipsum sit amet consectetur y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</PrtfTituloBio2>
                            <PrtfTituloNav>
                                <PrtfTituloLista ><PrtfTituloA target="_blank" href="">Github <PrtfTituloVector src={Flecha} alt="flecha"/> </PrtfTituloA></PrtfTituloLista>
                                <PrtfTituloLista ><PrtfTituloA target="_blank" href="">Linkedin <PrtfTituloVector src={Flecha} alt="flecha"/></PrtfTituloA></PrtfTituloLista>
                                <PrtfTituloLista ><PrtfTituloA target="_blank" href="">Instagram <PrtfTituloVector src={Flecha} alt="flecha"/></PrtfTituloA></PrtfTituloLista>
                                <PrtfTituloLista ><PrtfTituloA target="_blank" href="">Currículo <PrtfTituloVector src={Flecha} alt="flecha"/></PrtfTituloA></PrtfTituloLista>
                            </PrtfTituloNav>
                        </PrtfTituloBox>
                    </PrtfTituloContenido>
                </PrtfTitulo>
                        
                <PrtfSobre>
                    <PrtfSobreContenedor>
                        <PrtfSobreTitulo>Sobre mi</PrtfSobreTitulo>
                        <PrtfSobreParrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia.  </PrtfSobreParrafo>
                        <PrtfSobreParrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas metus vitae, aliquet metus.</PrtfSobreParrafo>
                        <PrtfSobreImg src={Firma} alt="Firma" />
                    </PrtfSobreContenedor>
                </PrtfSobre>

                <PrtfHabilidades>
                    <PrtfHabilidadesTitulo>Habilidades</PrtfHabilidadesTitulo>
                    <PrtfHabilidadesDiv>
                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen src={Html} alt="html5" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >HTML 5</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>

                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen src={Java} alt="java-scrip" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >Javascript</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>

                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen src={Css} alt="css" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >CSS</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>

                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen2 src={Node} alt="node" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >Node JS</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>

                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen2 src={Php} alt="php" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >PHP</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>

                        <PrtfHabilidadesBox>
                            <PrtfHabilidadesLista>
                                <PrtfHabilidadesListaImg ><PrtfHabilidadesImagen2 src={Reactjs} alt="react" /></PrtfHabilidadesListaImg>
                                <PrtfHabilidadesNombre >React</PrtfHabilidadesNombre>
                            </PrtfHabilidadesLista>
                        </PrtfHabilidadesBox>
                    </PrtfHabilidadesDiv>
                </PrtfHabilidades>

                <PrtfPasatiempo>
                    <PrtfPasatiempoTitulo>Pasatiempos</PrtfPasatiempoTitulo>
                    <PrtfPasatiempoLinea>
                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen><PrtfPasatiempoImg src={Skate} /></PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Patinaje</PrtfPasatiempoNombre>
                                </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>

                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen> <PrtfPasatiempoImg src={Guitarra} alt="" /></PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Tocar Guitarra</PrtfPasatiempoNombre>
                                    </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>

                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen> <PrtfPasatiempoImg src={Tv} alt="" /></PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Ver Séries</PrtfPasatiempoNombre>
                                    </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>

                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen><PrtfPasatiempoImg src={Musica} alt="" /></PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Oir Música</PrtfPasatiempoNombre> 
                                    </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>

                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen> <PrtfPasatiempoImg src={Cocina} alt="" /> </PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Cocinar</PrtfPasatiempoNombre>
                                    </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>

                        <PrtfPasatiempoCaja>
                            <PrtfPasatiempoLista>
                                <PrtfPasatiempoListaImagen> <PrtfPasatiempoImg src={Foto} alt="" /> </PrtfPasatiempoListaImagen>
                                <PrtfPasatiempoListaNombre>
                                    <PrtfPasatiempoNombre>Tomar Fotos</PrtfPasatiempoNombre>
                                    </PrtfPasatiempoListaNombre>
                            </PrtfPasatiempoLista>
                        </PrtfPasatiempoCaja>
                    </PrtfPasatiempoLinea>
                </PrtfPasatiempo>

                <PrtfEstudios>
                            <PrtfEstudiosTitulo>Formación académica</PrtfEstudiosTitulo>
                            <PrtfEstudiosCursos>
                                <PrtfEstudiosCaja>
                                    <PrtfEstudiosCajaUl >
                                        <PrtfEstudiosCajaLista><PrtfEstudiosImg src={Univ1} alt="logo" /></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosTexto>Análisis de datos</PrtfEstudiosTexto></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosParrafo>2018 - UFPR</PrtfEstudiosParrafo></PrtfEstudiosCajaLista>
                                    </PrtfEstudiosCajaUl>
                                </PrtfEstudiosCaja>
                                <PrtfEstudiosCaja>
                                    <PrtfEstudiosCajaUl >
                                        <PrtfEstudiosCajaLista><PrtfEstudiosImg src={Univ2} alt="logo" /></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosTexto>Formación en UX Design</PrtfEstudiosTexto></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosParrafo>2019 - Alura</PrtfEstudiosParrafo></PrtfEstudiosCajaLista>
                                    </PrtfEstudiosCajaUl>
                                </PrtfEstudiosCaja>
                                <PrtfEstudiosCaja>
                                    <PrtfEstudiosCajaUl >
                                        <PrtfEstudiosCajaLista><PrtfEstudiosImg src={Univ3} alt="logo" /></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosTexto>Posgrado en diseño</PrtfEstudiosTexto></PrtfEstudiosCajaLista>
                                        <PrtfEstudiosCajaLista><PrtfEstudiosParrafo>En curso - UFRJ</PrtfEstudiosParrafo></PrtfEstudiosCajaLista>
                                    </PrtfEstudiosCajaUl>
                                </PrtfEstudiosCaja>
                            </PrtfEstudiosCursos>
                </PrtfEstudios>

                <PrtfExperiencia>
                            <PrtfExperienciaTitulo>Experiencia Profesional</PrtfExperienciaTitulo>
                            <PrtfExperienciaCaja>
                                <PrtfExperienciaImg src={Xp1} alt="" />
                                <PrtfExperienciaContenedor>
                                    <PrtfExperienciaContenedorTitulo>Encriptador de texto</PrtfExperienciaContenedorTitulo>
                                    <PrtfExperienciaContenedorTexto>Challenge Alura Codificador </PrtfExperienciaContenedorTexto>
                                    <PrtfExperienciaContenedorBtn>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><PrtfExperienciaBtn1 variant="contained" >Repositorio</PrtfExperienciaBtn1></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href=""><PrtfExperienciaBtn2 variant="outlined">Ver Demo</PrtfExperienciaBtn2></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                    </PrtfExperienciaContenedorBtn>

                                </PrtfExperienciaContenedor>

                            </PrtfExperienciaCaja>  

                            <PrtfExperienciaCaja>
                                <PrtfExperienciaImg src={Xp2} />
                                <PrtfExperienciaContenedor>
                                    <PrtfExperienciaContenedorTitulo>Juego creado con HTML y JavaScript</PrtfExperienciaContenedorTitulo>
                                    <PrtfExperienciaContenedorTexto>Challenge Oracle </PrtfExperienciaContenedorTexto>
                                    <PrtfExperienciaContenedorBtn>
                                            <PrtfExperienciaSpan><PrtfExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><PrtfExperienciaBtn1 variant="contained" >Repositorio</PrtfExperienciaBtn1></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                            <PrtfExperienciaSpan><PrtfExperienciaDescripcion href=""><PrtfExperienciaBtn2 variant="outlined">Ver Demo</PrtfExperienciaBtn2></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                        </PrtfExperienciaContenedorBtn>
                                </PrtfExperienciaContenedor>
                            </PrtfExperienciaCaja>  

                            <PrtfExperienciaCaja>
                                <PrtfExperienciaImg src={Xp3} />
                                <PrtfExperienciaContenedor>
                                    <PrtfExperienciaContenedorTitulo>Encriptador de texto</PrtfExperienciaContenedorTitulo>
                                    <PrtfExperienciaContenedorTexto>Challenge Oracle </PrtfExperienciaContenedorTexto>
                                    <PrtfExperienciaContenedorBtn>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><PrtfExperienciaBtn1 variant="contained" >Repositorio</PrtfExperienciaBtn1></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href=""><PrtfExperienciaBtn2 variant="outlined">Ver Demo</PrtfExperienciaBtn2></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                    </PrtfExperienciaContenedorBtn>
                                </PrtfExperienciaContenedor>
                            </PrtfExperienciaCaja>  

                            <PrtfExperienciaCaja>
                                <PrtfExperienciaImg src={Xp4} />
                                <PrtfExperienciaContenedor>
                                    <PrtfExperienciaContenedorTitulo>Juego creado con HTML, CSS y JavaScript</PrtfExperienciaContenedorTitulo>
                                    <PrtfExperienciaContenedorTexto>Challenge Oracle </PrtfExperienciaContenedorTexto>
                                    <PrtfExperienciaContenedorBtn>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><PrtfExperienciaBtn1 variant="contained" >Repositorio</PrtfExperienciaBtn1></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                        <PrtfExperienciaSpan><PrtfExperienciaDescripcion href=""><PrtfExperienciaBtn2 variant="outlined">Ver Demo</PrtfExperienciaBtn2></PrtfExperienciaDescripcion></PrtfExperienciaSpan>
                                    </PrtfExperienciaContenedorBtn>
                                </PrtfExperienciaContenedor>
                            </PrtfExperienciaCaja>  
                </PrtfExperiencia>

                <PrtfContacto>
                    <PrtfContactoContenedor>
                        <PrtfContactoCajaIzquierda>
                            <PrtfContactoImg src={Contacto} />
                        </PrtfContactoCajaIzquierda>
                        <PrtfContactoCajaDerecha>
                            <PrtfContactoTitulo>Contacto</PrtfContactoTitulo>
                            <PrtfContactoTexto>¿Quieres contactarme?</PrtfContactoTexto>
                            <PrtfContactoTexto>Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </PrtfContactoTexto>

                            <FormularioPortafolio manejarCambio={manejarCambio} />

                        </PrtfContactoCajaDerecha>
                    </PrtfContactoContenedor>
                </PrtfContacto>

            </PrtfMain>
        </PrtfContenedor>    
    )
}

export default Portafolio