import { useState, useEffect } from "react";


export const Encriptar = (entrada) => {
    const [encriptar, setEncriptar] = useState({ value: [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]] })


    useEffect(() => {
        console.log(encriptar)
    });

/*
    for ( let i = 0; i < encriptar.length; i ++) {
        if (entrada.includes(encriptar[i][0])) {
            setEncriptar(entrada.replaceAll(encriptar[i][0], encriptar[i][1]));
        }
    }*/
    return Encriptar;
}

/*
const BtnEncriptador = (e) => {
    const textoEncriptado = Encriptar(Encriptar.value);
    console.log(textoEncriptado);
}
*/