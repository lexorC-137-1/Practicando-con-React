import styled from "styled-components";
import {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";


const Formulario = styled.form`
` 

const FormularioPortafolio = ({manejarCambio}) => {
    
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState({
        nombre: {
            error: false,
            texto: "Deben ser al menos 3 caracteres"
        },
        correo: {
            error: false,
            texto: "Deben ser al menos 3 caracteres"
        },
        asunto: {
            error: false,
            texto: "Deben ser al menos 3 caracteres"
        },
        mensaje: {
            error: false,
            texto: "Deben ser al menos 3 caracteres"
        }
    })

    useEffect(() => {
        console.log(nombre, correo, asunto, mensaje);
    }, [nombre, correo, asunto, mensaje]);

    const Validaciones = (nombre) => {
        if (nombre.length >= 3) {
            return {
                nombre: {error: false, texto:""},
                correo: {error: false, texto:""},
                asunto: {error: false, texto:""},
                mensaje: {error: false, texto:""}
                
            }
        }else {
            return { 
                nombre: {error: true, texto: "Deben ser al menos 3 caracteres"},
                correo: {error: true, texto: "Deben usar un correo valido"},
                asunto: {error: true, texto: "Deben ser al menos 3 caracteres"},
                mensaje: {error: true, texto: "Deben ser al menos 3 caracteres"}
            }
        }
    }
    return (
        <Formulario onSubmit={(e) => {
            e.preventDefault();
            manejarCambio({nombre, correo, asunto, mensaje});
        }}>
            <TextField 
            id="nombre"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="dense"
            value={nombre}
            onChange={(e) => {
                setNombre(e.target.value)
            }}
            error={errores.nombre.error}
            helperText={errores.nombre.error ? errores.nombre.texto : ""}
            onBlur={(e) => {
                setErrores(Validaciones(e.target.value))
            }}
            />

            <TextField 
            id="correo"
            label="Correo electronico"
            variant="outlined"
            fullWidth
            margin="dense"
            value={correo}
            onChange={(e) => {
                setCorreo(e.target.value)
            }}
            error={errores.correo.error}
            helperText={errores.correo.error ? errores.correo.texto : ""}
            onBlur={(e) => {
                setErrores(Validaciones(e.target.value))
            }}
            />

            <TextField
            id="asunto"
            label="Asunto"
            variant="outlined"
            fullWidth
            margin="dense"
            value={asunto}
            onChange={(e) => {
                setAsunto(e.target.value)
            }}
            error={errores.asunto.error}
            helperText={errores.asunto.error ? errores.asunto.texto : ""}
            onBlur={(e) => {
                setErrores(Validaciones(e.target.value))
            }}
            />

            <TextField
            id="mensaje"
            label="Mensaje"
            type="text-area"
            variant="outlined"
            fullWidth
            margin="dense"
            multiline
            rows={4}
            value={mensaje}
            onChange={(e) => {
                setMensaje(e.target.value)
            }}
            error={errores.mensaje.error}
            helperText={errores.mensaje.error ? errores.mensaje.texto : ""}
            onBlur={(e) => {
                setErrores(Validaciones(e.target.value))
            }}
            />

            <Button variant="contained" type="submit">Enviar Mensaje</Button>
        </Formulario>
    )
}

export default FormularioPortafolio;