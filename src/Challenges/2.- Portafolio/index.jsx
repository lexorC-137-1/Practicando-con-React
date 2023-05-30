import styled from "styled-components";
import { Button } from "@mui/material";
import FormularioPortafolio from "./fornulario";

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

const ProtafolioContenedor = styled.div`
    background-color: ${({theme}) => theme.body};
    font-family: "Raleway";
    display: flex;
`
const ProtafolioMain = styled.main`
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.inside};
    width: 92vw;
    margin: 1rem 0.75rem;
    padding: 1rem 1rem;
    border-radius: 1.5rem;
    box-shadow: 0.5rem 0.5rem 0.25rem 0  rgba(0, 0, 0, 0.4);
`
const PortafolioMenu = styled.section`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vh;
`
const PortafolioHeader = styled.header`
    display: flex;
`
const PortafolioHeaderImg = styled.img`
    filter: ${({theme}) => theme.filter};
    width: 10%;
    margin-right: 0.25rem;
`
const PortafolioNombre = styled.h3`
    font-size: 0.85rem;
`
const PortafolioNavegador = styled.nav`
    font-size: 0.65rem;
`
const PortafolioUl = styled.ul`

`
const PortafolioLista = styled.li`
    display: none;
    @media screen and (min-width: 1024px) {
        display: block;
    }  
`
const PortafolioListaContacto = styled.li`
    @media screen and (min-width: 768px) { 
        font-weight: bold;    
    }
    @media screen and (min-width: 1024px) { 
        display: none;
    }
`
const PortafolioListaItem = styled.a`
    color: ${({theme}) => theme.text};
    :hover{
    text-decoration: underline;
}
`
const PortafolioTitulo = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
`
const PortafolioTituloContenido = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    @media screen and (min-width: 784px) {
    flex-direction: row-reverse;
    align-items: center;
    }
`
const PortafolioTituloImg = styled.img`
    width: 8rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 768px) { 
        width: 12rem;
    }
    @media screen and (min-width: 1024px) {
        width: 18rem;
    }
`
const PortafolioTituloBox = styled.div`
    width: 80vw;
`
const PortafolioTituloBio = styled.h2`
    font-size: 1rem;

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }
    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }   
`
const PortafolioTituloBio2 = styled.h3`
    font-size: 1.3rem;
    font-weight: lighter;
    margin-right: 1.5vw;
    @media screen and (max-width: 768px) { 
        font-size: 1rem;
    }
`
const PortafolioTituloNav = styled.ul`
    display: flex;
    gap: 0.6rem;
    margin-top: 1.5vh;
`
const PortafolioTituloLista = styled.li`
    
`
const PortafolioTituloA = styled.a`
    color: ${({theme}) => theme.text};
    font-size: 0.8rem;

    :hover{
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) { 
    }
`
const PortafolioTituloVector = styled.img`
    filter: ${({theme}) => theme.filter};
`
const PortafolioSobre = styled.section`
    padding: 2rem;
`
const PortafolioSobreContenedor = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;  
    @media screen and (min-width: 768px) { 
        width: 70%;
    }
`
const PortafolioSobreTitulo = styled.h3`
    font-size: 1.5rem;
    @media screen and (min-width: 768px) { 
        font-size: 2rem;
    }
`
const PortafolioSobreParrafo = styled.p`
    font-size: 1rem;
    @media screen and (min-width: 768px) { 
        font-size: 1.5rem;
    }
`
const PortafolioSobreImg = styled.img`
    width: 10rem;
    margin-top: 1rem;
`
const PortafolioHabilidades = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
`
const PortafolioHabilidadesTitulo = styled.h3`
    font-size: 2rem;
    margin: 1rem;
    padding-left: 3rem;
`
const PortafolioHabilidadesDiv = styled.div`
    height: 60vh;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    }
`
const PortafolioHabilidadesBox = styled.div`
    background-color: ${({theme}) => theme.inside};
    border-radius: .5rem;
    width: 8rem;
    height: 6rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    @media screen and (min-width: 768px) { 

    }
    @media screen and (min-width: 1024px) {

    }
`
const PortafolioHabilidadesLista = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const PortafolioHabilidadesListaImg = styled.li`
    padding: 3rem 1rem 0;
`
const PortafolioHabilidadesImagen = styled.img`
    width: 70%;
`
const PortafolioHabilidadesNombre = styled.li`
   font-weight: bold;
   padding-left: 1rem;
`
const PortafolioPasatiempo = styled.section`
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
`
const PortafolioPasatiempoTitulo = styled.h3`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioPasatiempoLinea = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
`
const PortafolioPasatiempoCaja = styled.div`
    background-color: ${({theme}) => theme.body};
    border-radius: 1rem;
    width: 6rem;
    height: 7rem;
    display: flex;
    @media screen and (min-width: 768px) { 

    }
    @media screen and (min-width: 1024px) {

    }
`
const PortafolioPasatiempoLista = styled.ul`

`
const PortafolioPasatiempoListaImagen = styled.li`
    
`
const PortafolioPasatiempoImg = styled.img`
   padding-top: 1rem;
   padding-left: 2rem;
`
const PortafolioPasatiempoNombre = styled.li`
    margin-top: 0.75rem;
    padding-left: 0.75rem;
    font-weight: bold;
    display: flex;
`
const PortafolioEstudios = styled.section`
background-color: ${({theme}) => theme.body};
border-radius: 1.5rem;
padding: 2rem;
text-align: center;
`
const PortafolioEstudiosTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioEstudiosCursos = styled.div`
   display: flex;
   flex-direction: column;
    @media screen and (min-width: 1024px) {
        justify-content: space-around;
   }   
`
const PortafolioEstudiosCaja = styled.div`
    width: 100%;
    @media screen and (min-width: 1024px) {
    width: 25%;
    }  
`
const PortafolioEstudiosCajaUl = styled.ul`
    
`
const PortafolioEstudiosCajaLista = styled.li`
    
`
const PortafolioEstudiosImg = styled.img`
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
const PortafolioEstudiosTexto = styled.h3`
    
`
const PortafolioEstudiosParrafo = styled.p`
    
`
const PortafolioExperiencia = styled.section`
    padding: 2rem 0;
`
const PortafolioExperienciaTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
`
const PortafolioExperienciaCaja = styled.div`
    width: 75vw;
    gap: 1rem;
    margin: 1.5rem;
    @media screen and (min-width: 768px) { 
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    :nth-child(3),:nth-child(5){
        flex-direction: column;
        }
    }
    @media screen and (min-width: 1024px) { 
    :nth-child(3),:nth-child(5){
        flex-direction: row-reverse;
        }
    }
`
const PortafolioExperienciaImg = styled.img`
    width: 100%;
    @media screen and (min-width: 768px) { 
        width: 70%;
    }
`
const PortafolioExperienciaContenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const PortafolioExperienciaContainerTitulo = styled.h2`
    font-size: 1.2rem;
`
const PortafolioExperienciaTexto = styled.h3`
    font-weight: normal;
    font-size: 0.85rem;
`
const PortafolioExperienciaContenedorBtn= styled.div`
    background-color: ${({theme}) => theme.body};
    padding: .5rem;
    border-radius: .5rem;
    display: flex;
    gap: 1rem;
`
const PortafolioExperienciaSpan = styled.span`
    
`
const PortafolioExperienciaDescripcion = styled.a`

`
const PortafolioExperonciaBtn1 = styled(Button)`
    
`
const PortafolioExperonciaBtn2 = styled(Button)`
    
`
const PortafolioContacto = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 1.5rem;
    padding: 2rem;
`
const PortafolioContactoContenedor = styled.div`
    display: flex;
    gap: 1rem;
    padding-top: 2rem;
`
const PortafolioContactoCajaIzquierda = styled.div`
        display: none;
   @media screen and (min-width: 768px) { 
        width: 45%;
    }
`
const PortafolioContactoImg = styled.img`
        width: 100%;
        border-radius: 1.5rem;
`
const PortafolioContactoCajaDerecha = styled.div`
    display: flex;
    flex-direction: column;
`
const PortafolioContactoTitulo = styled.h2`
    font-size: 1.75rem;
    margin-bottom: 2vh;
`
const PortafolioContactoTexto = styled.h3`
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 3vh;
`


const Portafolio = () => {

    return (         
        <ProtafolioContenedor>
            <ProtafolioMain>

                <PortafolioMenu>
                    <PortafolioHeader>
                        <PortafolioHeaderImg src={Vector} alt="Estrella" />
                        <PortafolioNombre>Alexander Oria</PortafolioNombre>
                    </PortafolioHeader>
                    <PortafolioNavegador>
                        <PortafolioUl>
                            <PortafolioLista><PortafolioListaItem href="#sobre-mi"> Sobre mi </PortafolioListaItem></PortafolioLista>
                            <PortafolioLista><PortafolioListaItem href="#skills"> Skills </PortafolioListaItem></PortafolioLista>
                            <PortafolioLista><PortafolioListaItem href="#hobbies" >Hobbies </PortafolioListaItem></PortafolioLista>
                            <PortafolioLista><PortafolioListaItem href="#formacion"> Formación </PortafolioListaItem></PortafolioLista>
                            <PortafolioLista><PortafolioListaItem href="#xp"> Proyectos </PortafolioListaItem></PortafolioLista>
                            <PortafolioLista><PortafolioListaItem href="#contacto"> Contacto@fulana.com </PortafolioListaItem></PortafolioLista>
                            <PortafolioListaContacto><PortafolioListaItem href="#contacto"> contacto@fulana.com </PortafolioListaItem></PortafolioListaContacto>
                        </PortafolioUl>            
                    </PortafolioNavegador>
                </PortafolioMenu>

                <PortafolioTitulo>
                    <PortafolioTituloContenido>
                        <PortafolioTituloImg src={Perfil} />
                        <PortafolioTituloBox>
                            <PortafolioTituloBio>Hola, mi nombre es Alexander Oria y construyo paginas web </PortafolioTituloBio>
                            <PortafolioTituloBio2>Soy formado en .... lorem ipsum sit amet consectetur y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</PortafolioTituloBio2>
                            <PortafolioTituloNav>
                                <PortafolioTituloLista ><PortafolioTituloA target="_blank" href="">Github <PortafolioTituloVector src={Flecha} alt="flecha"/> </PortafolioTituloA></PortafolioTituloLista>
                                <PortafolioTituloLista ><PortafolioTituloA target="_blank" href="">Linkedin <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></PortafolioTituloLista>
                                <PortafolioTituloLista ><PortafolioTituloA target="_blank" href="">Instagram <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></PortafolioTituloLista>
                                <PortafolioTituloLista ><PortafolioTituloA target="_blank" href="">Currículo <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></PortafolioTituloLista>
                            </PortafolioTituloNav>
                        </PortafolioTituloBox>
                    </PortafolioTituloContenido>
                </PortafolioTitulo>
                        
                <PortafolioSobre>
                    <PortafolioSobreContenedor>
                        <PortafolioSobreTitulo>Sobre mi</PortafolioSobreTitulo>
                        <PortafolioSobreParrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia.  </PortafolioSobreParrafo>
                        <PortafolioSobreParrafo>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit velit, volutpat semper dignissim dictum, imperdiet ut lacus. Quisque gravida ex a mattis pretium. Suspendisse potenti. Ut semper sagittis ligula et lacinia. Aenean sit amet felis venenatis, egestas metus vitae, aliquet metus.</PortafolioSobreParrafo>
                        <PortafolioSobreImg src={Firma} alt="Firma" />
                    </PortafolioSobreContenedor>
                </PortafolioSobre>

                <PortafolioHabilidades>
                    <PortafolioHabilidadesTitulo>Habilidades</PortafolioHabilidadesTitulo>
                    <PortafolioHabilidadesDiv>
                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Html} alt="html5" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >HTML 5</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Java} alt="java-scrip" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >Javascript</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Php} alt="php" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >PHP</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Node} alt="node" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >Node JS</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Reactjs} alt="react" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >React</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesListaImg ><PortafolioHabilidadesImagen src={Css} alt="css" /></PortafolioHabilidadesListaImg>
                                <PortafolioHabilidadesNombre >CSS</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>
                    </PortafolioHabilidadesDiv>
                </PortafolioHabilidades>

                <PortafolioPasatiempo>
                    <PortafolioPasatiempoTitulo>Pasatiempos</PortafolioPasatiempoTitulo>
                    <PortafolioPasatiempoLinea>
                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen><PortafolioPasatiempoImg src={Skate} /></PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre> Patinaje</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen> <PortafolioPasatiempoImg src={Guitarra} alt="" /></PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre>Tocar Guitarra</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen> <PortafolioPasatiempoImg src={Tv} alt="" /></PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre>Ver Séries</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen><PortafolioPasatiempoImg src={Musica} alt="" /></PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre>Oir Música</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen> <PortafolioPasatiempoImg src={Cocina} alt="" /> </PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre>Cocinar</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <PortafolioPasatiempoListaImagen> <PortafolioPasatiempoImg src={Foto} alt="" /> </PortafolioPasatiempoListaImagen>
                                <PortafolioPasatiempoNombre>Tomar Fotos</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>
                    </PortafolioPasatiempoLinea>
                </PortafolioPasatiempo>

                <PortafolioEstudios>
                            <PortafolioEstudiosTitulo>Formación académica</PortafolioEstudiosTitulo>
                            <PortafolioEstudiosCursos>
                                <PortafolioEstudiosCaja>
                                    <PortafolioEstudiosCajaUl >
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosImg src={Univ1} alt="logo" /></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosTexto>Análisis de datos</PortafolioEstudiosTexto></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosParrafo>2018 - UFPR</PortafolioEstudiosParrafo></PortafolioEstudiosCajaLista>
                                    </PortafolioEstudiosCajaUl>
                                </PortafolioEstudiosCaja>
                                <PortafolioEstudiosCaja>
                                    <PortafolioEstudiosCajaUl >
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosImg src={Univ2} alt="logo" /></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosTexto>Formación en UX Design</PortafolioEstudiosTexto></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosParrafo>2019 - Alura</PortafolioEstudiosParrafo></PortafolioEstudiosCajaLista>
                                    </PortafolioEstudiosCajaUl>
                                </PortafolioEstudiosCaja>
                                <PortafolioEstudiosCaja>
                                    <PortafolioEstudiosCajaUl >
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosImg src={Univ3} alt="logo" /></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosTexto>Posgrado en diseño</PortafolioEstudiosTexto></PortafolioEstudiosCajaLista>
                                        <PortafolioEstudiosCajaLista><PortafolioEstudiosParrafo>En curso - UFRJ</PortafolioEstudiosParrafo></PortafolioEstudiosCajaLista>
                                    </PortafolioEstudiosCajaUl>
                                </PortafolioEstudiosCaja>
                            </PortafolioEstudiosCursos>
                </PortafolioEstudios>

                <PortafolioExperiencia>
                            <PortafolioExperienciaTitulo>Experiencia Profesional</PortafolioExperienciaTitulo>
                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp1} alt="" />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Encriptador de texto</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Alura Codificador </PortafolioExperienciaTexto>
                                    <PortafolioExperienciaContenedorBtn>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><PortafolioExperonciaBtn1 variant="contained" >Repositorio</PortafolioExperonciaBtn1></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href=""><PortafolioExperonciaBtn2 variant="outlined">Ver Demo</PortafolioExperonciaBtn2></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                    </PortafolioExperienciaContenedorBtn>

                                </PortafolioExperienciaContenedor>

                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp2} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Juego creado con HTML y JavaScript</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <PortafolioExperienciaContenedorBtn>
                                            <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><PortafolioExperonciaBtn1 variant="contained" >Repositorio</PortafolioExperonciaBtn1></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                            <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href=""><PortafolioExperonciaBtn2 variant="outlined">Ver Demo</PortafolioExperonciaBtn2></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                        </PortafolioExperienciaContenedorBtn>
                                </PortafolioExperienciaContenedor>
                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp3} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Encriptador de texto</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <PortafolioExperienciaContenedorBtn>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><PortafolioExperonciaBtn1 variant="contained" >Repositorio</PortafolioExperonciaBtn1></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href=""><PortafolioExperonciaBtn2 variant="outlined">Ver Demo</PortafolioExperonciaBtn2></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                    </PortafolioExperienciaContenedorBtn>
                                </PortafolioExperienciaContenedor>
                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp4} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Juego creado con HTML, CSS y JavaScript</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <PortafolioExperienciaContenedorBtn>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><PortafolioExperonciaBtn1 variant="contained" >Repositorio</PortafolioExperonciaBtn1></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                        <PortafolioExperienciaSpan><PortafolioExperienciaDescripcion href=""><PortafolioExperonciaBtn2 variant="outlined">Ver Demo</PortafolioExperonciaBtn2></PortafolioExperienciaDescripcion></PortafolioExperienciaSpan>
                                    </PortafolioExperienciaContenedorBtn>
                                </PortafolioExperienciaContenedor>
                            </PortafolioExperienciaCaja>  
                </PortafolioExperiencia>

                <PortafolioContacto>
                    <PortafolioContactoContenedor>
                        <PortafolioContactoCajaIzquierda>
                            <PortafolioContactoImg src={Contacto} />
                        </PortafolioContactoCajaIzquierda>
                        <PortafolioContactoCajaDerecha>
                            <PortafolioContactoTitulo>Contacto</PortafolioContactoTitulo>
                            <PortafolioContactoTexto>¿Quieres contactarme?</PortafolioContactoTexto>
                            <PortafolioContactoTexto>Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </PortafolioContactoTexto>

                            <FormularioPortafolio manejarCambio={manejarCambio} />

                        </PortafolioContactoCajaDerecha>
                    </PortafolioContactoContenedor>
                </PortafolioContacto>

            </ProtafolioMain>
        </ProtafolioContenedor>    
    )
}

export default Portafolio