import React from "react";
import {View, Text, ScrollView} from "react-native"
import { Header } from "../header/header.component";
import { useNavigation } from "@react-navigation/native";
import styled from 'styled-components/native';
import { TitleHeader } from "../titleHeader/titleHeader.component";

export const ComoComprarScreen = () => {
    const navigation = useNavigation();

    const texto = ["PARA ENCONTRAR UN DETERMINADO PRODUCTO PODÉS RECORRER NUESTRO CATÁLOGO" +
    "COMPLETO, POR CATEGORÍA O UTILIZAR EL BUSCADOR EN LA PARTE SUPERIOR DE" +
    "LA APP", "CUANDO ENCUENTRES EL PRODUCTO QUE QUIERAS COMPRAR, HACER CLICK SOBRE ÉL Y ELEGÍ EL TALLE Y" +  
    "COLOR (SI TENÉS DUDAS SOBRE TU TALLE, PODÉS VER LAS MEDIDAS DE LOS MISMOS ACÁ) LUEGO HACÉ CLICK EN " + 
    "AGREGAR AL CARRITO. SI QUERÉS ELEGIR OTRO PRODUCTO, CLICKEÁ EN “SEGUIR COMPRANDO” Y VOLVÉS AL CATÁLOGO."
    ,"UNA VEZ QUE HAYAS ELEGIDO EL/LOS PRODUCTOS QUE TE INTERESAN, SEGUÍ LOS SIGUIENTES PASOS PARA CONCRETAR TU COMPRA:" + "\n" +

    ">CLICKEÁ EN “INICIAR LA COMPRA”." + "\n" +
    
    ">ELEGÍ EL MÉTODO DE ENTREGA. SI PREFERÍS QUE ENVIEMOS TU PEDIDO CON CORREO ARGENTINO (PODÉS " +
    "CONSULTAR PREVIAMENTE LAS TARIFAS DE ENVÍO CON EL CALCULADOR DE COSTOS DE ENVÍO QUE SE ENCUENTRA EN EL CARRITO DE COMPRAS Ó" + 
    "EN EL DETALLE DE CADA PRODUCTO, INGRESANDO ALLÍ TU CÓDIGO POSTAL, SINO, SE TE DETALLARÁN EN EL SIGUIENTE PASO), O SI POR" + 
    "EL CONTRARIO, PREFERÍS RETIRAR TU PEDIDO PERSONALMENTE POR NUESTRO PUNTO DE ENTREGA EN LANÚS OESTE." + "\n" +
    
    ">COMPLETÁ TUS DATOS PERSONALES. ES IMPORTANTE QUE NOS CONSIGNES TU E-MAIL Y NÚMERO DE " + 
    "TELÉFONO MÓVIL COMPLETA Y CORRECTAMENTE ASÍ COMO TAMBIÉN TU DIRECCIÓN PARA EVITAR POSIBLES"  + 
    "INCOVENIENTES AL MOMENTO DE LA ENTREGA. SI TENÉS UN CUPÓN DE DESCUENTO PODÉS CARGAR EL" + 
    "CÓDIGO EN ESTE PASO.",
    ">ELEGÍ EL MÉTODO DE ENVÍO. SI PREFERÍS ENTREGA EN SUCURSAL DE CORREO ARGENTINO MÁS CERCANA O ENTREGA A DOMICILIO.(1)" + "\n" +

    ">ELEGÍ EL MEDIO DE PAGO. COMPLETÁ LA INFORMACIÓN REQUERIDA ACORDE AL MÉTODO DE PAGO DESEADO. UNA VEZ COMPLETADOS TODOS LOS DATOS HACÉ CLICK EN “RELIZAR PEDIDO”." + 
    "LUEGO DE HABER RECORRIDO ESTOS PASOS, VAS A RECIBIR UN E-MAIL EN TU CUENTA DE CORREO CONFIRMANDO LA COMPRA Y LUEGO OTRO E-MAIL CONFIRMANDO LA ACREDITACIÓN DEL PAGO."  + 
    "UNA VEZ ACREDITADO TU PAGO, SE ACTIVA EL PROCESO DE ENVÍO Y EN POCOS DÍAS (2) RECIBIRÁS TU PEDIDO."]

    const TextContainer = ({number, text}) => (
        <View style={{marginBottom: 20}}>
        <Text style={{fontFamily: 'serif', fontSize: 30}}>{number}.</Text>
        <Text style={{fontFamily: 'Oswald_300Light', textAlign: 'justify',
        letterSpacing: 2}}>
        {text}
        </Text>
        </View>
        )
    return(
        <>
        <Header navigation={navigation}/>
        <ScrollView>
            <TextWrapper>
                <TitleHeader title="¿Como comprar?"/>
                {texto.map((x,i) => (
                <TextContainer number={i + 1} text={texto[i]} key={i}/>
                ))}
            </TextWrapper>
        </ScrollView>
        </>
    )
}

const TextWrapper = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;