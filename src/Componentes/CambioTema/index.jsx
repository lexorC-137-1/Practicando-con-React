import React from "react";
import themeOn from "../../Assets/Images/themeOn.svg";
import themeOff from "../../Assets/Images/themeOff.svg";
import { Icono } from "../UI";


export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema Claro" />;
    const oscuro = <Icono src={themeOff} alt="Tema Oscuro" />;

    return <>{tema ? oscuro : claro}</>;
};