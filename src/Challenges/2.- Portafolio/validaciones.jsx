


export const validarNombre = (nombre) => {
    const longitud = nombre.length;
    if(longitud >= 3 && longitud < 30){
        return true;
    }else{
        return false;
    }
};
export const validarCorreo = (correo) => {
    const longitud = correo.length;
    if(longitud >= 8 && correo.includes("@")){
        return true;
    }else{
        return false;
    }
};
export const validarAsunto = (asunto) => {
    const longitud = asunto.length;
    if(longitud >= 2 && longitud < 30){
        return true;
    }else{
            return false;
    }
};
export const validarMensaje = (mensaje) => {
    const longitud = mensaje.length;
    if(longitud >= 4 && longitud < 30){
        return true;
    }else{
            return false;
    }
};


