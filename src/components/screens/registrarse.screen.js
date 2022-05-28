import React, {useState, useEffect} from "react";
import {View, Text, TextInput, ScrollView} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { GoBackHeader } from "../goBack/go-back.component";
import { TitleHeader } from "../titleHeader/titleHeader.component";
import { validateForm } from "./contactData.errors";
import { Button } from "../mainButton/button.component";
import { register, authenticationActions } from "../../store/authenticationSlice";
import styled from 'styled-components/native';

export const RegistrarseScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [nombreError, setNombreError] = useState(null);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [telefono, setTelefono] = useState('');
    const [telefonoError, setTelefonoError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [repeatedPasswordError, setRepeatedPasswordError] = useState(null);
    const [errorState, setErrorState] = useState((number) => ({errorState: number}));
    const [firestoreError, setFirestoreError] = useState(null);
    const error = useSelector(state => state.authentication.error);

    const handleValue = (setValue, e, setError) => {
        setValue(e);
        setError && setError(null);
    }
    
    //console.log(error);

    const formHandler = () => {
        setErrorState(0);
        setFirestoreError(null);
        validateForm(nombre, "nombre",setNombreError,setErrorState);
        validateForm(email,"email",setEmailError,setErrorState);
        validateForm(password,"password",setPasswordError,setErrorState);
        if(password !== repeatedPassword){
            setRepeatedPasswordError('Las contraseñas deben coincidir');
            setErrorState(1);
        }
    }

    useEffect(() => {
        if(errorState === 0){
            dispatch(register(email, nombre,password));
            navigation.navigate("RegistroExitoso");
        }
    },[errorState]);

    return(
        <>
        <GoBackHeader/>
        <ScrollView>
            <ScrollView style={{marginLeft: 15, marginRight: 15}}>
            <TitleHeader title="Registrarse"/>
            <View>
            <Input placeholder="Nombre" error={nombreError} 
            onChangeText={(e) => handleValue(setNombre,e,setNombreError)}/>
            {nombreError && <Error>{nombreError}</Error>}
            <Input placeholder="E-mail" error={emailError} 
            onChangeText={(e) => handleValue(setEmail,e,setEmailError)}/>
            {emailError && <Error>{emailError}</Error>}
            {firestoreError && <Error>{firestoreError}</Error>}
            <Input placeholder="Telofono (opcional)" keyboardType='numeric'
            onChangeText={(e) => handleValue(setTelefono,e)}/>
            <Input placeholder="Contraseña" error={passwordError} secureTextEntry={true}
            onChangeText={(e) => handleValue(setPassword,e,setPasswordError)}/>
            {passwordError && <Error>{passwordError}</Error>}
            <Input placeholder="Repetir contraseña" error={repeatedPasswordError} secureTextEntry={true}
            onChangeText={(e) => handleValue(setRepeatedPassword,e,setRepeatedPasswordError)}/>
            {repeatedPasswordError && <Error>{repeatedPasswordError}</Error>}
            </View>
            </ScrollView>
        </ScrollView>
        <Button title="registrarse" action="validateForm" cartHandler={formHandler}/>
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

