import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componentes/Paginas/Home";
import Encriptador from "./Challenges/1.- Encriptador";
import Portafolio from "./Challenges/2.- Portafolio";
import AluraGeeks from "./Challenges/3.- AluraGeek";
import AluraFlix from "./Challenges/Aluraflix";
import Page404 from "./Componentes/Paginas/Page404";
import Header from "./Componentes/Header";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaOscuro } from "./Componentes/UI/temas";
import { BtnTema } from "./Componentes/UI";
import CambioTema from "./Componentes/CambioTema";
import Foorter from "./Componentes/Footer";


function App() {
  const [tema, setTema] = useState(true);
  const activadorTema = () => {
    setTema((tema) => !tema)
  }
  return (
    <Router>
      <ThemeProvider theme={tema ? temaClaro : temaOscuro} >
        <GlobalStyle />
        <BtnTema onClick={activadorTema}>
          <CambioTema  tema={tema} />
        </BtnTema>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encriptador" element={<Encriptador />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/alurageeks" element={<AluraGeeks />} />
            <Route path="/aluraflix" element={<AluraFlix />} />
            <Route path="*" element={<Page404 />} />        
        </Routes>
        <Foorter />   
      </ThemeProvider> 
    </Router>
  );
}

export default App;
