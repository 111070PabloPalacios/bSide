import React, { useState, useEffect} from "react";
import { errores, validateForm } from "./contactData.errors";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { Checkbox } from "react-native-paper";
import { DropdownList } from "../dropdownList/dropdownlist.component";
import { GoBackHeader } from "../goBack/go-back.component";
import { Button } from "../mainButton/button.component";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

export const ContactDataScreen = () => {
  const paises = [
    "Argentina",
    "Argelia",
    "Bolivia",
    "Peru",
    "Chile",
    "Alemania",
    "Carlos",
  ];
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [errorState, setErrorState] = useState((number) => ({errorState: number}));
  const [emailError, setEmailError] = useState(null);
  const [nombreError, setNombreError] = useState(null);
  const [apellidoError, setApellidoError] = useState(null);
  const [telefonoError, setTelefonoError] = useState(null);
  const [nombreRetiraError, setNombreRetiraError] = useState(null);
  const [apellidoRetiraError, setApellidoRetiraError] = useState(null);
  const [calleError, setCalleError] = useState(null);
  const [numeroCalleError, setNumeroCalleError] = useState(null);
  const [ciudadError, setCiudadError] = useState(null);
  const [codigoPostalError, setCodigoPostalError] = useState(null);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido]= useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreRetira, setNombreRetira] = useState('');
  const [apellidoRetira, setApellidoRetira] = useState('');
  const [calle, setCalle] = useState('');
  const [numeroCalle, setNumeroCalle] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [barrio, setBarrio] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');

  const handleValue = (setValue, e, setError) => {
    setValue(e);
    setError && setError(null);
  }

  /*const validateForm = (object, errorname,setError) => {
    if(object.length === 0){
        setErrorState(1);
        for (let i = 0; i < errores.length; i++) {
            if(errorname === errores[i].errorLabel){
              setError(errores[i].error);
              setErrorCounter(errorCounter + 1);
                break;
            }
        }
    }
}*/

  useEffect(() => {
    errorState === 0 && navigation.navigate("PaymentData");
  },[errorState]);

  const formHandler = () => {
    setErrorState(0);
    validateForm(email,"email",setEmailError,setErrorState);
    validateForm(nombre, "nombre",setNombreError,setErrorState);
    validateForm(apellido, "apellido",setApellidoError,setErrorState);
    validateForm(telefono, "telefono",setTelefonoError,setErrorState);
    checked && validateForm(nombreRetira, "nombreR",setNombreRetiraError,setErrorState);
    checked && validateForm(apellidoRetira, "apellidoR",setApellidoRetiraError,setErrorState);
    validateForm(calle, "calle",setCalleError,setErrorState);
    validateForm(numeroCalle, "numero",setNumeroCalleError,setErrorState);
    validateForm(ciudad, "ciudad",setCiudadError,setErrorState);
    validateForm(codigoPostal, "codigo",setCodigoPostalError,setErrorState);
  }

  return (
    <>
    <GoBackHeader />
    <ScrollView
      nestedScrollEnabled={true} style={{ backgroundColor: "#ffffff" }}>
      <View style={{ marginLeft: 15, marginRight: 15 }}>
        <SectionTitle>Datos de facturacion</SectionTitle>
        <DropdownList data={paises} />
        <Input placeholder="E-mail" error={emailError} 
        onChangeText={(e) => handleValue(setEmail,e,setEmailError)}/>
        {emailError && <Error>{emailError}</Error>}
        <Input placeholder="Nombre" error={nombreError}
        onChangeText={(e) => handleValue(setNombre,e,setNombreError)}/>
        {nombreError && <Error>{nombreError}</Error>}
        <Input placeholder="Apellido" error={apellidoError}
        onChangeText={(e) => handleValue(setApellido,e,setApellidoError)}/>
        {apellidoError && <Error>{apellidoError}</Error>}
        <Input placeholder="Telefono" keyboardType='numeric' error={telefonoError} maxLength={10}
        onChangeText={(e) => handleValue(setTelefono,e,setTelefonoError)}/>
        {telefonoError && <Error>{telefonoError}</Error>}
        <CheckboxWrapper>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {setChecked(!checked);}}
          />
          <Text style={{ fontFamily: "Oswald_400Regular", color: "#9f9f9f" }}>
            Otra persona va a retirar el pedido
          </Text>
        </CheckboxWrapper>
        {checked && (
          <View>
            <SubsectionTitle>Persona que retirara el pedido</SubsectionTitle>
            <Input placeholder="Nombre" error={nombreRetiraError}
            onChangeText={(e) => handleValue(setNombreRetira,e,setNombreRetiraError)}/>
            {nombreRetiraError && <Error>{nombreRetiraError}</Error>}
            <Input placeholder="Apellido" 
            onChangeText={(e) => handleValue(setApellidoRetira,e,setApellidoRetiraError)}/>
            {apellidoRetiraError && <Error>{apellidoRetiraError}</Error>}
          </View>
        )}
        <View style={{marginBottom: 15}}>
        <SubsectionTitle>Domicilio de la persona que pagara el pedido</SubsectionTitle>
        <Input placeholder="Calle" error={calleError}
        onChangeText={(e) => handleValue(setCalle,e,setCalleError)}/>
        {calleError && <Error>{calleError}</Error>}
        <Input placeholder="Numero" error={numeroCalleError}
        onChangeText={(e) => handleValue(setNumeroCalle,e,setNumeroCalleError)}/>
        {numeroCalleError && <Error>{numeroCalleError}</Error>}
        <Input placeholder="Departamento (Opcional)" 
        onChangeText={(e) => handleValue(setDepartamento,e)}/>
        <Input placeholder="Barrio (Opcional)"
        onChangeText={(e) => handleValue(setBarrio,e)}/>
        <Input placeholder="Ciudad" error={ciudadError}
        onChangeText={(c) => handleValue(setCiudad,c,setCiudadError)}/>
        {ciudadError && <Error>{ciudadError}</Error>}
        <Input placeholder="Codigo Postal" error={codigoPostalError}
        onChangeText={(c) => handleValue(setCodigoPostal,c,setCodigoPostalError)}/>
        {codigoPostalError && <Error>{codigoPostalError}</Error>}
        </View>
       </View>
      <Button title="continuar" action="validateForm" cartHandler={formHandler}/>
    </ScrollView>
    </>
  );
};

const SectionTitle = styled.Text`
  font-family: Oswald_400Regular;
  font-size: 24px;
`;

const Error = styled.Text`
  background-color: #db3e3e;
  font-family: Oswald_400Regular;
  text-align: center;
  color: white;
`;

const SubsectionTitle = styled.Text`
  font-family: Oswald_400Regular;
  color: #000000;
  margin-top: 5px;
`;

const CheckboxWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
