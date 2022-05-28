import React, {useCallback} from "react";

export const errores = [
    {errorLabel: 'email',
    error: 'Se debe ingresar un E-mail'},
    {errorLabel: 'nombre',
    error: 'Se debe ingresar un nombre'},
    {errorLabel: 'apellido',
    error: 'Se debe ingresar un apellido'},
    {errorLabel: 'telefono',
    error: 'Se debe ingresar un telefono'},
    {errorLabel: 'nombreR',
    error: 'Se debe ingresar el nombre de la persona que recibira el pedido'},
    {errorLabel: 'apellidoR',
    error: 'Se debe ingresar el apellido de la persona que recibira el pedido'},
    {errorLabel: 'calle',
    error: 'Se debe ingresar una calle'},
    {errorLabel: 'numero',
    error: 'Se debe ingresar un numero de calle'},
    {errorLabel: 'ciudad',
    error: 'Se debe ingresar el nombre de la ciudad'},
    {errorLabel: 'codigo',
    error: 'Se debe ingresar el codigo postal'},
    {errorLabel: 'numeroTarjeta',
    error: 'Se debe ingresar el numero de tarjeta'},
    {errorLabel: 'fechaVencimiento',
    error: 'Se debe ingresar fec. de vencimiento'},
    {errorLabel: 'numeroDocumento',
    error: 'Se debe ingresar el numero de documento'},
    {errorLabel: 'password',
    error: 'Se debe ingresar una contraseña'},
    {errorLabel: 'password',
    error: 'Las contraseñas tienen que coincidir'},]

export const validateForm = (object, errorname,setError, errorState) => {
    if(object.length === 0){
        errorState(1);
        for (let i = 0; i < errores.length; i++) {
            if(errorname === errores[i].errorLabel){
                setError(errores[i].error);
                errorState && errorState(1);
                break;
            }
        }
    }
}