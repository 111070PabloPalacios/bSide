import React, {useEffect, useState, useContext}from "react";
import {View, Text, TouchableOpacity} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../services/cart/cart.context";
import { cartActions } from "../../store/cartSlice";

export const Selector = ({text, array}) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);
    const color = useSelector(state => state.cart.color);
    const dispatch = useDispatch();
    useEffect(() => {
        if(title === null){
            setTitle(text);
        };

        if(text === "color"){
            dispatch(cartActions.setColor(array[0])); 
            dispatch(cartActions.setColorPosition({color: array[0], colorsArray: array}));
        }
        else{
            dispatch(cartActions.setSize(array[0]));
        }
    },[]);

    const updateValue = (selectedItem) => {
        if(text === "color"){
            dispatch(cartActions.setColorPosition({colorsArray: array, color: selectedItem}));
            dispatch(cartActions.setColor(selectedItem));
            setSelectedValue(selectedItem);
        }
        else{
            dispatch(cartActions.setSize(selectedItem));
            setSelectedValue(selectedItem);
        }
    };

    return(
        <Wrapper onPress={() => 
            navigation.navigate("OptionsScreen", {text: text, itemArray: array, onPress: updateValue})}>   
            <Text style={{fontSize:20, color: 'black'}}>{text.toUpperCase()}:</Text>
            <Text style={{fontSize: 20, color: '#8cc63e'}}>{!selectedValue ? array[0] : selectedValue}</Text>
            <View style={{marginLeft: 'auto', marginTop: 'auto', marginBottom: 4}}>
            <AntDesign name="right" size={30} style={{color: '#8cc63e'}}/>
            </View>
         </Wrapper> 
    );
}

export const Wrapper = styled(TouchableOpacity)`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    margin-top: 10px;
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 2px;
    height: 70px;
    border-color: gray;
    border-width: 1.5px;
`;