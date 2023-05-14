import React from "react";
import themeOn from "../../Assets/Imagenes/CambioTema/themeOn.svg";
import themeOff from "../../Assets/Imagenes/CambioTema/themeOff.svg";
import { Icono } from "../UI";


export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema Claro" />;
    const oscuro = <Icono src={themeOff} alt="Tema Oscuro" />;

    return <>{tema ? oscuro : claro}</>;
};