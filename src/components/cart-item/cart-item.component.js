import React, {useState,useContext} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { cartActions } from "../../store/cartSlice";

export const CartItem = ({item}) => {
    const [itemAmount, setItemAmount] = useState(item.amount);
    const dispatch = useDispatch();

    return(
        <>
        <View style={{ flexDirection: "row", borderBottomColor: 'gray', 
      borderBottomWidth: 2, paddingBottom: 10, marginLeft: 20, marginRight: 20}}>
          <Cover source={{ uri: item.image }}/>
          <View style={{ flexDirection: "column", marginLeft: 10 }}>
            <Title>
              {item.title} ({item.color}, {item.size})
            </Title>
            <AmountWrapper>
              <TouchableOpacity onPress={() => dispatch(cartActions.addAmmount(item))}>
                <Text style={{ fontSize: 24, marginRight: 10 }}>+</Text>
              </TouchableOpacity>
              <AmountTextWrapper>
                <Text style={{ fontSize: 24 }}>{item.amount}</Text>
              </AmountTextWrapper>
              <TouchableOpacity onPress={() => dispatch(cartActions.restAmmount(item))}>
                <Text style={{ fontSize: 24, marginLeft: 10 }}>—</Text>
              </TouchableOpacity>
            </AmountWrapper>
          </View>
          <View style={{marginLeft: 'auto', flexDirection: 'column'}}>
            <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}
            onPress={() => dispatch(cartActions.deleteItemFromCart(item))}>
            <AntDesign name="delete" size={24}/>
            </TouchableOpacity>
            <Text style={{marginTop: 'auto', marginRight: 10, fontWeight: "bold"}}>${item.price}</Text>
          </View>
        </View>
      </>
    );
}

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