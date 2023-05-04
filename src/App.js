import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home"
import Encriptador from "./Challenges/Encriptador";
import Portafolio from "./Challenges/Portafolio";
import AluraGeeks from "./Challenges/Alurageeks";
import AluraFlix from "./Challenges/Aluraflix";
import Page404 from "./Paginas/Page404";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encriptador" element={<Encriptador />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/alurageeks" element={<AluraGeeks />} />
        <Route path="/aluraflix" element={<AluraFlix />} />
        <Route path="*" element={<Page404 />} />
      </Routes>      
    </Router>
  );
}

export default App;
