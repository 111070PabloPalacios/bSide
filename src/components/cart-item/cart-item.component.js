import React, {useState,useContext} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { CartContext } from "../../services/cart/cart.context";

export const CartItem = ({item}) => {
    const {deleteItem, productList, updateProduct} = useContext(CartContext);
    const [itemAmount, setItemAmount] = useState(item.amount);
    
    const deleteTest = () => {
      const sliced = productList(0,1);
      console.log(sliced);
    }

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
              <TouchableOpacity onPress={() => updateProduct(item.amount, item.key, item.size, item.color, "add")}>
                <Text style={{ fontSize: 24, marginRight: 10 }}>+</Text>
              </TouchableOpacity>
              <AmountTextWrapper>
                <Text style={{ fontSize: 24 }}>{item.amount}</Text>
              </AmountTextWrapper>
              <TouchableOpacity onPress={() => {item.amount > 1 && updateProduct(item.amount, item.key, item.size, item.color,"substract")}}>
                <Text style={{ fontSize: 24, marginLeft: 10 }}>—</Text>
              </TouchableOpacity>
            </AmountWrapper>
          </View>
          <View style={{marginLeft: 'auto', flexDirection: 'column'}}>
            <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}
            onPress={() => deleteItem(item)}>
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