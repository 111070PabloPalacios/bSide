import React from "react";
import {View, Text} from "react-native"
import { GoBackHeader } from "../goBack/go-back.component";
import { Button } from "../mainButton/button.component";
import styled from "styled-components/native";

export const OrderMadeScreen = () => {
    return(
        <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Title>¡Tu orden se realizo correctamente!</Title>
            <Button title="volver al inicio" action="goToData" goTo="Home"/>
        </View>
        </>
    );
}

const Title = styled.Text`
    font-family: Oswald_400Regular;
    font-size: 18px;
    margin-bottom: 10px;
`;