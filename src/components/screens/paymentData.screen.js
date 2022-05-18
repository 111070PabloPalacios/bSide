import React, {useState, useEffect} from "react";
import {View, Text, ScrollView} from "react-native";
import { GoBackHeader } from "../goBack/go-back.component";
import { DropdownList } from "../dropdownList/dropdownlist.component";
import { useNavigation } from "@react-navigation/native";
import { validateForm, errors } from "./contactData.errors";
import { Button } from "../mainButton/button.component";
import styled from "styled-components/native";

export const PaymentDataScreen = () => {
    const [errorState, setErrorState] = useState((number) => ({errorState: number}));
    const [numeroTarjetaError,setNumeroTarjetaError] = useState(null);
    const [titularTarjetaError,setTitularTarjetaError] = useState(null);
    const [fechaVencimientoError, setFechaVencimientoError] = useState(null);
    const [cvvError,setCvvError] = useState(null);
    const [numeroDocumentoError, setNumeroDocumentoError] = useState(null);
    const [numeroTarjeta, setNumeroTarjeta] = useState('');
    const [titularTarjeta, setTitularTarjeta] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [cvv,setCvv] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const data = [{label:"DNI", value:"dni"}, 
                  {label: "Pasaporte", value: "pasaporte"}, 
                  {label: "CUIT", value:"cuit"}];
    const navigation = useNavigation();

    useEffect(() => {
        errorState === 0 && navigation.navigate("OrderMade");
    },[errorState]);

    const dateHandler = (dateSet,text,setError) => {
        dateSet(text);
        text.length === 2 && dateSet(text + '/');
        setError && setError(null);
    }

    const handleValue = (setValue, e, setError) => {
        setValue(e);
        setError && setError(null);
      }

    const formHandler = () => {
        setErrorState(0);
        validateForm(numeroTarjeta, "nombre",setNumeroTarjetaError,setErrorState);
        validateForm(titularTarjeta, "nombre",setTitularTarjetaError,setErrorState);
        validateForm(fechaVencimiento, "nombre",setFechaVencimientoError,setErrorState);
        validateForm(cvv, "nombre",setCvvError,setErrorState);
        validateForm(numeroDocumento, "nombre",setNumeroDocumentoError,setErrorState);
    }

    return(
        <>
        <GoBackHeader/>
        <ScrollView style={{flex: 1,marginLeft: 15, marginRight: 15}}>
        <Input placeholder="Numero de tarjeta" keyboardType='numeric' error={numeroTarjetaError}
        onChangeText={(e) => handleValue(setNumeroTarjeta, e,setNumeroTarjetaError)}/>
        {numeroTarjetaError && <Error>{numeroTarjetaError}</Error>}
        <Input placeholder="Titular de la tarjeta" error={titularTarjetaError}
        onChangeText={(e) => handleValue(setTitularTarjeta, e,setTitularTarjetaError)}/>
        {titularTarjetaError && <Error>{titularTarjetaError}</Error>}
        <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection:'column'}}>
            <Input placeholder="Vencimiento(MM/AA)" error={fechaVencimientoError} 
            value={fechaVencimiento} maxLength={5} keyboardType='numeric'
            onChangeText={(e) => dateHandler(setFechaVencimiento,e,setFechaVencimientoError)}
            style={{marginRight: 'auto',}}/>
            {fechaVencimientoError && <Error>{fechaVencimientoError}</Error>}
            </View>
            <View style={{flexDirection: 'column', marginLeft: 'auto'}}>
            <Input error={cvvError}
            placeholder="CVV" maxLength={3} keyboardType='numeric'
            onChangeText={(e) => handleValue(setCvv, e, setCvvError)}/>
            {cvvError && <Error> </Error>}
            </View>
        </View>
        <DropdownList data={data}/>
        <Input error={numeroDocumentoError} 
        placeholder="Documento del titular" keyboardType='numeric'
        onChangeText={(e) => handleValue(setNumeroDocumento, e,setNumeroDocumentoError)}/>
        {numeroDocumentoError && <Error>{numeroDocumentoError}</Error>}
        </ScrollView>
        <Button title="Realizar pedido" action="validateForm" cartHandler={formHandler}/>
        </>
    );
}

const Input = styled.TextInput`
  padding-horizontal: 10px;
  height: 40px;
  margin-top: 12px;
  background-color: #ffff;
  font-family: Oswald_300Light;
  font-size: 18px;
  border-width: 2px;
  border-color: ${(props) => props.error ? '#db3e3e' : '#9f9f9f'};
  elevation: -1;
`;

const Error = styled.Text`
  background-color: #db3e3e;
  font-family: Oswald_400Regular;
  text-align: center;
  color: white;
`;