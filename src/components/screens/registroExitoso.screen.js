import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { Button } from "../mainButton/button.component";

export const RegistroExitosoScreen = () => {
  return (
    <>
      <MainWrapper>
        <Title>¡Te has registrado con exito!</Title>
        <Button title="volver al inicio" action="goToData" goTo="Home"/>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Title = styled.Text`
    font-family: Oswald_300Light;
    font-size: 25px;
    margin-bottom: 10px;
`;

/*const Button = styled(TouchableOpacity)`
    background-color: #8cc63e;
    padding: 15px;
`;*/
