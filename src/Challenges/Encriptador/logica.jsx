import {useState} from "react";

const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

export const Encriptar = () => {
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado
}
export const Desencriptar = () => {
    var mensajeEncriptado = inputMensaje.value;
    let mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    inputResultado.value = mensaje
}

export const Copiar = () => {
    let mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

export const Escuchar = () => {
    let mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}




