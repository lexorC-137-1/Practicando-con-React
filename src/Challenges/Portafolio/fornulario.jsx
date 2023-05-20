import {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";



const FormularioPortafolio = () => {
    
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    useEffect(() => {
        console.log(nombre, correo, asunto, mensaje);
    }, [nombre, correo, asunto, mensaje]);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log({nombre, correo, asunto, mensaje});
        }}>
            <TextField 
            id="nombre"
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="dense"
            onChange={(e) => {
                setNombre(e.target.value)
            }}
            value={nombre}
            />

            <TextField 
            id="correo"
            label="Correo electronico"
            variant="outlined"
            fullWidth
            margin="dense"
            onChange={(e) => {
                setCorreo(e.target.value)
            }}
            value={correo}
            />

            <TextField
            id="asunto"
            label="Asunto"
            variant="outlined"
            fullWidth
            margin="dense"
            onChange={(e) => {
                setAsunto(e.target.value)
            }}
            value={asunto}
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
            onChange={(e) => {
                setMensaje(e.target.value)
            }}
            value={mensaje}
            />

            <Button variant="contained" type="submit">Enviar Mensaje</Button>
        </form>
    )
}

export default FormularioPortafolio;