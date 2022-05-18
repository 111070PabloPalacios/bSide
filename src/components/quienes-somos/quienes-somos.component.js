import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Header } from "../header/header.component";

export const QuienesSomos = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Quienes Somos</Text>
      </View>
    </>
  );
};
