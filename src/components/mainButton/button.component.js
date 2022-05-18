import React, {useContext} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../services/cart/cart.context";
import styled from "styled-components/native";

export const Button = ({cartHandler,action, title, goTo}) => {
    const {productList, arrayHandler, updateProduct} = useContext(CartContext);
    const navigation = useNavigation();

    const handlePress = () => {
        if(action === "addToCart"){
            cartHandler();
        }else
        if(action === "goToData"){
            navigation.navigate(goTo);
        }else
        if(action === "validateForm"){
            cartHandler();
        }
    }

    return(
        <TouchableOpacity
        onPress={() => handlePress()}
        style={{ backgroundColor: "#8cc63e", padding: 15 }}
      >
        <Title>{title.toUpperCase()}</Title>
      </TouchableOpacity>
    );
}

const Title = styled.Text`
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: Oswald_700Bold;
`;