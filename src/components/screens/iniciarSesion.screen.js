import React, { useState, useMemo,useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GoBackHeader } from "../goBack/go-back.component";
import { TitleHeader } from "../titleHeader/titleHeader.component";
import { validateForm } from "./contactData.errors";
import { Button } from "../mainButton/button.component";
import { onLogin } from "../../store/authenticationSlice";
import { authenticationActions } from "../../store/authenticationSlice";

export const IniciarSesionScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(null);
    const [specialError, setSpecialError] = useState(null);
    const [errorState, setErrorState] = useState(1);
    const loginError = useSelector(item => item.authentication.error);
    const navDir = useSelector(item => item.authentication.goTo);

    const handleValue = (setValue, e, setError, setLoginError) => {
        setValue(e);
        setError && setError(null);
        setLoginError && setLoginError(null);
    }  

    const formHandler = () => {
        setErrorState(0);
        setSpecialError(null);
        validateForm(email,"email",setEmailError,setErrorState);
        validateForm(password,"password",setPasswordError,setErrorState);       
    }

    

    useEffect(() => {
        if(errorState === 0){
            dispatch(onLogin(email, password));
        }
        setSpecialError(null);
        if(navDir){
            navigation.navigate(navDir);
            setEmail('');
            setPassword('');
            dispatch(authenticationActions.navigateTo(null));
        }
        else{
            setErrorState(1);
            setSpecialError(null);
            loginError === 'auth/user-not-found' && errorState === 1 && setSpecialError("El usuario no se encuentra registrado");
        }
    },[errorState,navDir,loginError]);

    return(
        <>
        <GoBackHeader/>
        <ScrollView>
            <ScrollView style={{marginLeft: 15, marginRight: 15}}>
            <TitleHeader title="Iniciar Sesion"/>
            <View>
            <Input clearButtonMode="always" value={email}
            placeholder="E-mail" error={emailError} 
            onChangeText={(e) => handleValue(setEmail,e,setEmailError, setSpecialError)}/>
            {emailError && <Error>{emailError}</Error>}
            {!emailError && specialError && <Error>{specialError}</Error>}
            <Input placeholder="Contraseña" error={passwordError} value={password} secureTextEntry={true}
            onChangeText={(e) => handleValue(setPassword,e,setPasswordError)}/>
            {passwordError && <Error>{passwordError}</Error>}
            </View>
            </ScrollView>
        </ScrollView>
        <Button title="iniciar sesion" action="validateForm" cartHandler={formHandler}/>
        </>
    );
};

const Input = styled.TextInput`
  padding-horizontal: 10px;
  height: 40px;
  margin-top: 12px;
  background-color: #ffff;
  font-family: Oswald_300Light;
  font-size: 18px;
  border-width: 2px;
  border-color: ${(props) => (props.error ? "#db3e3e" : "#9f9f9f")};
  elevation: -1;
`;

const Error = styled.Text`
  background-color: #db3e3e;
  font-family: Oswald_400Regular;
  text-align: center;
  color: white;
`;
