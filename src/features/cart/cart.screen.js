import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../services/cart/cart.context";
import { GoBackHeader } from "../../components/goBack/go-back.component";
import { CartItem } from "../../components/cart-item/cart-item.component";
import { Button } from "../../components/mainButton/button.component";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const CartScreen = ({route}) => {
  const { productList, handleTotal } = useContext(CartContext);

  return (
    <>
      {productList.length > 0 ?  (
      <>
      <FlatList data={productList}
        renderItem={({ item }) => (
        <CartItem item={item}/>)}
        extraData={productList}
        keyExtractor={(item) => item.key + '-' + item.size + '-' + item.color}
        ListHeaderComponent={<GoBackHeader />}/>
        <Button title="Iniciar Compra" action="goToData" goTo="ContactData"/>
        </>) :
        (
        <>
        <GoBackHeader />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>El carrito esta vacio</Text>
        </View>
        </>)
        }
    </>
  );
};

const AmountWrapper = styled.View`
  justify-content: flex-start;
  margin-top: auto;
  flex-direction: row;
`;

const Title = styled.Text`
  margin-top: 20px;
  max-width: 200px;
`;

const Cover = styled.Image`
  height: 89px;
  width: 60px;
  margin-top: 20px;
`; 

const AmountTextWrapper = styled.View`
  border-color: gray;
  border-width: 2px;
  padding-horizontal: 12px;
`;