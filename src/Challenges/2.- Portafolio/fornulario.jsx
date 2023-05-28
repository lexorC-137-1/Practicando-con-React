import styled from "styled-components";
import {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";
import { validarNombre, validarCorreo, validarAsunto, validarMensaje } from "./validaciones";


const Formulario = styled.form`
` 

const FormularioPortafolio = ({manejarCambio}) => {
    
    const [nombre, setNombre] = useState({ value: "", valid: true });
    const [correo, setCorreo] = useState({ value: "", valid: true });
    const [asunto, setAsunto] = useState({ value: "", valid: true });
    const [mensaje, setMensaje] = useState({ value: "", valid: true });


    useEffect(() => {

    }, [nombre, correo, asunto, mensaje]);

    return (
        <Formulario onSubmit={(e) => {
            e.preventDefault();
            if (nombre.valid && correo.valid && asunto.valid && mensaje.valid){
                console.log("Enviar Formulario");
                manejarCambio({nombre, correo, asunto, mensaje});
            } else {
                console.log("No hacer nada");
            }
        }}>
            <TextField 
            id="nombre"
            type="text"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="dense"
            value={nombre.value}
            onChange={(e) => {
                const nombre = e.target.value;
                const valido = validarNombre(nombre);
                setNombre({ value: nombre, valid: valido});
            }}
            onBlur={(e) => {
                validarNombre(nombre);
            }}
            error={nombre.valid === false}
            helperText={nombre.valid === false && "Deben ser al menos 3 caracteres" }
            />

            <TextField 
            id="correo"
            type="email"
            label="Correo electronico"
            variant="outlined"
            fullWidth
            margin="dense"
            value={correo.value}
            onChange={(e) => {
                const correo = e.target.value;
                const valido = validarCorreo(correo);
                setCorreo({ value: correo, valid: valido});
            }}
            error={correo.valid === false}
            helperText={correo.valid === false && "Debe introducir un correo valido"}
            />

            <TextField
            id="asunto"
            type="text"
            label="Asunto"
            variant="outlined"
            fullWidth
            margin="dense"
            value={asunto.value}
            onChange={(e) => {
                const asunto = e.target.value;
                const valido = validarAsunto(asunto);
                setAsunto({ value: asunto, valid: valido});
            }}
            error={asunto.valid === false}
            helperText={asunto.valid === false && "Deben ser al menos 2 caracteres"}
            />

            <TextField
            id="mensaje"
            type="text-area"
            label="Mensaje"
            variant="outlined"
            fullWidth
            margin="dense"
            multiline
            rows={4}
            value={mensaje.value}
            onChange={(e) => {
                const mensaje = e.target.value;
                const valido = validarMensaje(mensaje);
                setMensaje ({ value: mensaje, valid: valido});
            }}
            error={mensaje.valid === false}
            helperText={mensaje.valid === false && "Deben ser al menos 4 caracteres"}
            />

            <Button variant="contained" type="submit">Enviar Mensaje</Button>
        </Formulario>
    )
}

export default FormularioPortafolio;