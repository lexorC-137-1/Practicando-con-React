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
    min-width: 90vw;
    min-height: 90vh;
    padding: 2vh 1vw;
`
const ProtafolioMain = styled.main`
    font-family: "Raleway";
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;
    color: ${({theme}) => theme.text};
    background-color: ${({theme}) => theme.inside};
    height: auto;
    max-width: 95vw;
    margin: 3.3vh ;
    padding: 6vh 6vw;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 425px) {

    }
    @media screen and (max-width: 768px) {
    }
    @media (max-width: 1200px) {

    }
`
const PortafolioMenu = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem 0 1rem;
    margin-bottom: 2vh;
`
const PortafolioHeader = styled.header`
    display: flex;
`
const PortafolioHeaderImg = styled.img`
        filter: ${({theme}) => theme.filter};
        height: 1.5rem;
        margin: 0.3rem 1rem 0 0;
`
const PortafolioNav = styled.ul`
    display: flex;
    text-align: center;
    flex-direction: row;
    gap: 2rem;
`
const PortafolioLista = styled.li`
    @media screen and (max-width: 768px) {
        display: none;        
    }  
`
const PortafolioListaContacto = styled.li`
        display: none;

        @media screen and (max-width: 768px) { 
            display: inline-block;
            font-weight: bold;
        }

        @media screen and (max-width: 425px) {
            font-weight: 500;
        
        }
`
const PortafolioListaA = styled.a`
    color: ${({theme}) => theme.text};
    :hover{
    text-decoration: underline;
}
`
const PortafolioTitulo = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 5rem;
`
const PortafolioTituloDiv = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding: 2rem;
    @media screen and (max-width: 425px) {
        flex-direction: column;
        align-items: flex-start;
    }
`
const PortafolioTituloImg = styled.img`
    width: 18rem;
    
    @media screen and (max-width: 768px) { 
        width: 12rem;
    }
    @media screen and (max-width: 425px) {
        width: 8rem;
        margin-bottom: 1rem;
    }
`
const PortafolioTituloBio = styled.h2`
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
    @media screen and (max-width: 425px) {
        font-size: 1.5rem;
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
    gap: 3rem;
    padding-left: 3rem;
`
const PortafolioTituloA = styled.a`
    color: ${({theme}) => theme.text};
    :hover{
        text-decoration: underline;
    }
    @media screen and (max-width: 768px) { 
        font-size: 0.9rem;
    }
`
const PortafolioTituloVector = styled.img`
    filter: ${({theme}) => theme.filter};
`
const PortafolioSobre = styled.section`
    padding: 2rem;
`
const PortafolioSobreContenedor = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;  
    @media screen and (max-width: 768px) { 
        width: 100%;
    }
`
const PortafolioSobreTitulo = styled.h3`
    font-size: 2rem;
    @media screen and (max-width: 768px) { 
        font-size: 1.5rem;
    }
`
const PortafolioSobreParrafo = styled.p`
    font-size: 1.5rem;
    @media screen and (max-width: 768px) { 
        font-size: 1rem;
    }
`
const PortafolioSobreImg = styled.img`
    width: 15rem;    
`
const PortafolioHabilidades = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 5rem;
    padding: 2vh 6vw 8vh;
    text-align: center;
`
const PortafolioHabilidadesTitulo = styled.h3`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioHabilidadesDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) { 
        justify-content: center;
    }
    @media screen and (max-width: 425px) {
        gap: 1rem;
    }
`
const PortafolioHabilidadesBox = styled.div`
    background-color: ${({theme}) => theme.inside};
    border-radius: 1rem;
    width: 11%;
    height: 9rem;
    position: relative;
    padding: 1rem;
    @media screen and (max-width: 768px) { 
        width: 25%;
        height: 7rem;
        margin: 1rem;
    }
    @media screen and (max-width: 425px) {
        width: 40%;
        margin: 0;
        padding: 0.5rem;
    }
`
const PortafolioHabilidadesLista = styled.ul`
    display: flex;
    flex-direction: column;
    padding-top: 2vh;
`
const PortafolioHabilidadesImg = styled.li`
    margin-bottom: 3vh;
`
const PortafolioHabilidadesNombre = styled.li`
    font-weight: bold;
`
const PortafolioPasatiempo = styled.section`
    padding: 2rem;
    text-align: center;
`
const PortafolioPasatiempoTitulo = styled.h3`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioPasatiempoLinea = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) { 
        justify-content: center;
    }

    @media screen and (max-width: 425px) {
        gap: 1rem;
    }
`
const PortafolioPasatiempoCaja = styled.div`
    width: 10%;
    height: 9rem;
    position: relative;
    padding: 1rem;
    @media screen and (max-width: 768px) { 
        width: 25%;
        height: 7rem;
        margin: 1rem;
    }
    @media screen and (max-width: 425px) {
        width: 40%;
        margin: 0;
        padding: 0.5rem;
    }
`
const PortafolioPasatiempoLista = styled.ul`
    bottom: 1rem;

`
const PortafolioPasatiempoImg = styled.img`
   width: 3rem;
`
const PortafolioPasatiempoNombre = styled.li`
    margin-top: 0.5rem;
    font-weight: bold;
`
const PortafolioEstudios = styled.section`
background-color: ${({theme}) => theme.body};
border-radius: 5rem;
padding: 2rem;
text-align: center;
`
const PortafolioEstudiosTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioEstudiosCursos = styled.div`
   display: flex;
   justify-content: space-around;
    @media screen and (max-width: 425px) {
      flex-direction: column;
   }   
`
const PortafolioEstudiosCaja = styled.div`
    width: 25%;
    @media screen and (max-width: 425px) {
        width: 100%;
    }  
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
const PortafolioExperiencia = styled.section`
    padding: 2rem;
    text-align: center;
`
const PortafolioExperienciaTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 1.5rem;
`
const PortafolioExperienciaCaja = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1.5rem;
    :nth-child(3),:nth-child(5){
    flex-direction: row-reverse;
}
    @media screen and (max-width: 768px) { 
        flex-direction: column;
        align-items: flex-start;
    }
    :nth-child(3),:nth-child(5){
        flex-direction: column;
    }
`
const PortafolioExperienciaImg = styled.img`
    width: 70%;
    @media screen and (max-width: 768px) { 
        width: 100%;
    }
`
const PortafolioExperienciaContenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const PortafolioExperienciaContainerTitulo = styled.h2`
    font-size: 1.5rem;
`
const PortafolioExperienciaTexto = styled.h3`
    font-weight: normal;
    font-size: 1rem;
`
const PortafolioExperienciaDescripcion = styled.a`
    padding: 2rem;
`
const PortafolioContacto = styled.section`
    background-color: ${({theme}) => theme.body};
    border-radius: 5rem;
    padding: 2rem;
`
const PortafolioContactoContenedor = styled.div`
    display: flex;
    gap: 1rem;
    padding-top: 2rem;
`
const PortafolioContactoCajaIzquierda = styled.div`
    width: 45%;
    @media screen and (max-width: 768px) { 
        display: none;
    }
`
const PortafolioContactoImg = styled.img`
        width: 100%;
        border-radius: 3rem;
`
const PortafolioContactoCajaDerecha = styled.div`
    display: flex;
    flex-direction: column;
`
const PortafolioContactoTitulo = styled.h2`
    font-size: 2rem;
    margin-bottom: 5vh;
`
const PortafolioContactoTexto = styled.h3`
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 5vh;
`


const Portafolio = () => {

    return (         
        <ProtafolioContenedor>
            <ProtafolioMain>

                <PortafolioMenu>
                    <PortafolioHeader>
                        <PortafolioHeaderImg src={Vector} alt="Estrella" />
                        <h3>Alexander Oria</h3>
                    </PortafolioHeader>
                    <nav>
                        <PortafolioNav>
                            <PortafolioLista><PortafolioListaA href="#sobre-mi"> Sobre mi </PortafolioListaA></PortafolioLista>
                            <PortafolioLista><PortafolioListaA href="#skills"> Skills </PortafolioListaA></PortafolioLista>
                            <PortafolioLista><PortafolioListaA href="#hobbies" >Hobbies </PortafolioListaA></PortafolioLista>
                            <PortafolioLista><PortafolioListaA href="#formacion"> Formación </PortafolioListaA></PortafolioLista>
                            <PortafolioLista><PortafolioListaA href="#xp"> Proyectos </PortafolioListaA></PortafolioLista>
                            <PortafolioLista><PortafolioListaA href="#contacto"> Contacto@fulana.com </PortafolioListaA></PortafolioLista>
                            <PortafolioListaContacto><PortafolioListaA href="#contacto"> contacto@fulana.com </PortafolioListaA></PortafolioListaContacto>
                        </PortafolioNav>            
                    </nav>
                </PortafolioMenu>

                <PortafolioTitulo>
                    <PortafolioTituloDiv>
                        <PortafolioTituloImg src={Perfil} />
                        <div>
                            <PortafolioTituloBio>Hola, mi nombre es Alexander Oria y construyo paginas web </PortafolioTituloBio>
                            <PortafolioTituloBio2>Soy formado en .... lorem ipsum sit amet consectetur y actualmente estoy participando del proyecto Oracle ONE en Alura Latam.</PortafolioTituloBio2>
                            <PortafolioTituloNav>
                                <li ><PortafolioTituloA target="_blank" href="">Github <PortafolioTituloVector src={Flecha} alt="flecha"/> </PortafolioTituloA></li>
                                <li ><PortafolioTituloA target="_blank" href="">Linkedin <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></li>
                                <li ><PortafolioTituloA target="_blank" href="">Instagram <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></li>
                                <li ><PortafolioTituloA target="_blank" href="">Currículo <PortafolioTituloVector src={Flecha} alt="flecha"/></PortafolioTituloA></li>
                            </PortafolioTituloNav>
                        </div>
                    </PortafolioTituloDiv>
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
                                <PortafolioHabilidadesImg ><img src={Html} alt="html5" /></PortafolioHabilidadesImg>
                                <PortafolioHabilidadesNombre >HTML 5</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesImg > <img src={Java} alt="java-scrip" /></PortafolioHabilidadesImg>
                                <PortafolioHabilidadesNombre >Javascript</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesImg > <img src={Php} alt="php" /></PortafolioHabilidadesImg>
                                <PortafolioHabilidadesNombre >PHP</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesImg ><img src={Node} alt="node" /></PortafolioHabilidadesImg>
                                <PortafolioHabilidadesNombre >Node JS</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesImg > <img src={Reactjs} alt="react" /> </PortafolioHabilidadesImg>
                                <PortafolioHabilidadesNombre >React</PortafolioHabilidadesNombre>
                            </PortafolioHabilidadesLista>
                        </PortafolioHabilidadesBox>

                        <PortafolioHabilidadesBox>
                            <PortafolioHabilidadesLista>
                                <PortafolioHabilidadesImg > <img src={Css} alt="css" /> </PortafolioHabilidadesImg>
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
                                <li><PortafolioPasatiempoImg src={Skate} /></li>
                                <PortafolioPasatiempoNombre> Patinaje</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <li> <PortafolioPasatiempoImg src={Guitarra} alt="" /></li>
                                <PortafolioPasatiempoNombre>Tocar Guitarra</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <li> <PortafolioPasatiempoImg src={Musica} alt="" /></li>
                                <PortafolioPasatiempoNombre>Oir música</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <li><PortafolioPasatiempoImg src={Tv} alt="" /></li>
                                <PortafolioPasatiempoNombre>Ver séries</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <li> <PortafolioPasatiempoImg src={Cocina} alt="" /> </li>
                                <PortafolioPasatiempoNombre>Cocinar</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>

                        <PortafolioPasatiempoCaja>
                            <PortafolioPasatiempoLista>
                                <li> <PortafolioPasatiempoImg src={Foto} alt="" /> </li>
                                <PortafolioPasatiempoNombre>Tomar fotos</PortafolioPasatiempoNombre>
                            </PortafolioPasatiempoLista>
                        </PortafolioPasatiempoCaja>
                    </PortafolioPasatiempoLinea>
                </PortafolioPasatiempo>

                <PortafolioEstudios>
                            <PortafolioEstudiosTitulo>Formación académica</PortafolioEstudiosTitulo>
                            <PortafolioEstudiosCursos>
                                <PortafolioEstudiosCaja>
                                    <ul >
                                        <li><PortafolioEstudiosImg src={Univ1} alt="logo" /></li>
                                        <li ><h4 >Análisis de datos</h4></li>
                                        <li><p>2018 - UFPR</p></li>
                                    </ul>
                                </PortafolioEstudiosCaja>
                                <PortafolioEstudiosCaja>
                                    <ul >
                                        <li><PortafolioEstudiosImg src={Univ2} alt="logo" /></li>
                                        <li ><h4 >Formación en UX Design</h4></li>
                                        <li><p>2019 - Alura</p></li>
                                    </ul>
                                </PortafolioEstudiosCaja>
                                <PortafolioEstudiosCaja>
                                    <ul >
                                        <li><PortafolioEstudiosImg src={Univ3} alt="logo" /></li>
                                        <li ><h4 >Posgrado en diseño</h4></li>
                                        <li><p>En curso - UFRJ</p></li>
                                    </ul>
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
                                    <div>
                                        <span><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><Button variant="contained" >Repositorio</Button></PortafolioExperienciaDescripcion></span>
                                        <span><a href=""><Button variant="outlined">Ver Demo</Button></a></span>
                                    </div>

                                </PortafolioExperienciaContenedor>

                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp2} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Juego creado con HTML y JavaScript</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <div>
                                            <span><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><Button variant="contained" >Repositorio</Button></PortafolioExperienciaDescripcion></span>
                                            <span><a href=""><Button variant="outlined">Ver Demo</Button></a></span>
                                        </div>
                                </PortafolioExperienciaContenedor>
                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp3} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Encriptador de texto</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <div>
                                        <span><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-encriptador-latam"><Button variant="contained" >Repositorio</Button></PortafolioExperienciaDescripcion></span>
                                        <span><a href=""><Button variant="outlined">Ver Demo</Button></a></span>
                                    </div>
                                </PortafolioExperienciaContenedor>
                            </PortafolioExperienciaCaja>  

                            <PortafolioExperienciaCaja>
                                <PortafolioExperienciaImg src={Xp4} />
                                <PortafolioExperienciaContenedor>
                                    <PortafolioExperienciaContainerTitulo>Juego creado con HTML, CSS y JavaScript</PortafolioExperienciaContainerTitulo>
                                    <PortafolioExperienciaTexto>Challenge Oracle </PortafolioExperienciaTexto>
                                    <div>
                                        <span><PortafolioExperienciaDescripcion href="https://github.com/alura-challenges/challenge-one-juego-ahorcado"><Button variant="contained" >Repositorio</Button></PortafolioExperienciaDescripcion></span>
                                        <span><a href=""><Button variant="outlined">Ver Demo</Button></a></span>
                                    </div>
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